import meta from "@app/meta";

export default function Head() {
  return (
    <>
      <title>{meta.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
