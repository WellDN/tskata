//if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

export function apple(x: number | string): string {
    if (typeof x === 'string') x = parseInt(x);
    return Math.pow(x, 2) > 1000
      ? `It's hotter than the sun!!`
      : `Help yourself to a honeycomb Yorkie for the glovebox.`;
}