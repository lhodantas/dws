export function formatDate(date: string) {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  //@ts-ignore
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    newDate
  );
  return formattedDate;
}
