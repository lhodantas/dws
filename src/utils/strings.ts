export function getLastName(fullName: string) {
  const nameParts = fullName.trim().split(/\s+/);
  return nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0];
}
