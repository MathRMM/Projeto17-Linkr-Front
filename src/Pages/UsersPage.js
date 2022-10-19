import Main from "../Components/Main/Main"
import Topo from "../Components/Header/Topo"

export default function UsersPage({userId = 1}) {
    return (
        <>
            <Topo/>
            <Main>
                <div>
                    <img href={'imagem'}/>
                    <h2>{`${'nome'} post's`}</h2>
                </div>

                
            </Main>
        </>
    )
}