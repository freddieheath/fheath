import memoji from "../../public/assets/memoji.png";

export default function Hero() {
  return (
    <>
      <div className="py-12">
        <div className={``}>
          <img className={`h-32`} src={memoji} alt="My Face!" />
        </div>
        <h1 className={`text-2xl`}>Freddie Heath</h1>
        <h2 className={`text-lg`}>Media Communications (BA) Graduate</h2>
        <p className={`py-6 text-lg`}>
          A Media Communications graduate of UAL: London College of
          Communication looking for entry level roles in advertising and
          marketing.
        </p>
      </div>
    </>
  );
}
