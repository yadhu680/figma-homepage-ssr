import HeaderClientLoader from "./HeaderClientLoader";

export default function HeaderShell() {
  return (
     <>
        <div
            style={{
                height: "38px", // reserve space for top strip + header
                width: "100%",
                backgroundColor: "#fff",
            }}
        />
        {/* Hydrate interactive header on client */}
        <HeaderClientLoader />
    </>
  );
}
