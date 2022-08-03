import { CardAside } from "../../components/CardAside";
import { CardMain } from "../../components/CardMain";
import { HomeContainer } from "./style";

export function Home () {
    return (
        <HomeContainer>
            <CardAside />
            <CardMain />
        </HomeContainer>
    )
}