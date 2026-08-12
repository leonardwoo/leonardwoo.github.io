import fs from 'node:fs';
import path from 'node:path';
import probe from 'probe-image-size';

export function resolveImagePath(
  src: string,
  contentFilePath: string | undefined,
  projectRoot: string,
): string | null {
  const clean = src.split('?')[0]!.split('#')[0]!;
  if (!clean || clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('data:')) {
    return null;
  }

  if (clean.startsWith('/')) {
    return path.join(projectRoot, 'public', clean.slice(1));
  }

  if (contentFilePath) {
    return path.resolve(path.dirname(contentFilePath), clean);
  }

  return null;
}

export async function readImageDimensions(
  filePath: string,
): Promise<{ width: number; height: number; } | null> {
  try {
    if (!fs.existsSync(filePath)) return null;
    const result = await probe(fs.readFileSync(filePath));
    if (result.width && result.height) {
      return { width: result.width, height: result.height };
    }
  } catch {
    return null;
  }
  return null;
}
