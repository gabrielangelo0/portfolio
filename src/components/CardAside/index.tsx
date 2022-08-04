import { Buildings, Envelope, GithubLogo, LinkedinLogo, MapPin } from "phosphor-react";
import { useEffect, useState } from "react";
import { CardContainer } from "./style";

export function CardAside () {
    const [userInfo, setUserInfo] = useState<any>([])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielangelo0')
        .then((response) => {
            return response.json()})
        .then((result) => {
            setUserInfo(result)
            // console.log((result))
        })
            
        .catch((erro) => console.error(erro))
    }, [])

    

    return (
        <CardContainer>
            <>

            {/* {userInfo.map((item) =>{ return (<p>{item}</p>) })} */}
            {/* {userInfo.map((itens) => {
                return (
                    <> */}
                        <div className="cardProfile card">
                            <img src={userInfo.avatar_url} alt="Imagem avatar" />
                        <h2>{userInfo.name}</h2>
                        <small>Roler</small>
                    </div>
                    <div className="informationsCard card">
                        <ul>
                            <li><MapPin size={20} color="#837E9F" /></li>
                            <li>Brasil</li>
                        </ul>
                        <ul>
                            <li><Buildings size={20} color="#837E9F" /></li>
                            <li>Coreplan</li>
                        </ul>
                        <ul>
                            <li><GithubLogo size={20} color="#837E9F" /></li>
                            <li>gabrielangelo0</li>
                        </ul>
                        <ul>
                            <li><LinkedinLogo size={20} color="#837E9F" /></li>
                            <li>gabrielangelo0</li>
                        </ul>
                        <ul>
                            <li><Envelope size={20} color="#837E9F" /></li>
                            <li>gabrielangelolira@gmail.com</li>
                        </ul>
                    </div>
                    <div className="skills card">
                        <header>
                            <h2>Tecnologias</h2>
                        </header>
                        <ul>
                            <li>JAVASCRIPT</li>
                            <li>REACTJS</li>
                            <li>NODEJS</li>
                            <li>GIT</li>
                            <li>GITHUB</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ELIXIR</li>
                            <li>REACT NATIVE</li>
                        </ul>
                    </div>
                    {/* </>
                )
            })} */}
            </>



            {/* <ul>
                {userInfo.map(item => 
                    
                        <li>{item}</li>
                    
                )}
            </ul> */}
        </CardContainer>
    )
}