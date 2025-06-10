import Account from "../../components/Account/Account";
import Header from "../../components/Header/Header";
import { useHeader } from "../../components/Header/context/useHeader";

export default function Home() {
  const { modalAccount } = useHeader();

  return (
    <>
      <Header />
      {modalAccount && <Account />}
    </>
  );
}
