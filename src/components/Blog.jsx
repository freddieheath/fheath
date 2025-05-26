import { BlogData } from "../data";

export default function Blog() {
  return (
    <div>
      {BlogData.map((data) => (
        <div key={data.id}>
          <h1>{data.id}</h1>
        </div>
      ))}
    </div>
  );
}
