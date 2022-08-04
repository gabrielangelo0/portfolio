import { Folder, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { MainContainer, Title } from "./style";

interface Props {
    name?: string;
    description?: string;
}

interface ArrayProps {
    result: Props[]
}

export function CardMain({ name, description }: Props) {
    const [informations, setInformations] = useState<ArrayProps[]>([])
    const [last, setLast] = useState<any>([''])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielangelo0/repos')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setInformations(result)
            })
            .catch((Error) => console.error(Error))
    }, [])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielangelo0/repos')
            .then((responses) => {
                return responses.json()
            })
            .then((results) => {
                setLast(results[0])
            })
            .catch((Error) => console.error(Error))
    }, [])


    return (
        <MainContainer>
            <div className="projects card">
                <Title>My project</Title>
                <p>Veja todos</p>
            </div>
            <div className="recentProjects">

                {informations.map((info: any, key: number) => {
                    return (
                        <div className="recentList card">
                            <header>
                                <Folder size={20} color="#837E9F" />
                                <h2 key={key}>{info.name}</h2>
                            </header>
                            <main>
                                <p>{info.description}</p>
                            </main>
                            <footer>
                                <div className="itemsLeft">
                                    <div className="styledItems">
                                        <Star size={20} color="#837E9F" />
                                        <p>100</p>
                                    </div>
                                    <div className="styledItems">
                                        <Star size={20} color="#837E9F" />
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="itemsRight">
                                    <span></span>
                                    <p>Typescript</p>
                                </div>
                            </footer>
                        </div>
                    )
                })}
            </div>

            <div className="recentPost card">
                <h2>Recent Posts</h2>
            </div>
            {/* {last.map((item: any) => {
                        return ( */}
            <div className="miniList">
                <div className="recentItem card">
                    <div className="avatar">
                        <img src="https://avatars.githubusercontent.com/u/102261788?v=4"></img>
                    </div>
                    <div className="infoSection">
                        <header>
                            <h2>{last.name}</h2>
                            <time title={last.created_at}>há 2 anos atrás</time>
                        </header>
                        <section>
                            <p>{last.description}</p>
                            <div className="tags">
                                <p>#react-native</p>
                                <p>#genimotion</p>
                                <p>#react-native</p>
                                <p>#react-native</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* )
                    })} */}
        </MainContainer>
    )
}