import Navbar from "../components/LandingPage/Navbar";
import Table from "../components/UserWinners/Table";

export default function UserWinners() {

    return (
        <>
            <Navbar />
            <section className=" px-3 pt-24 home" id="">
                <Table />
            </section>
        </>
    )
}
