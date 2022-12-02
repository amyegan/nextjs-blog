import { parseISO, format } from "date-fns";

export default function PrettyDate({ dateString }) {
  if (dateString) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  }

  return <time dateTime="unknown">Date not specified</time>;
}
