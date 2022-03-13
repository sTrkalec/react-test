import { ReposiroryItem } from "./RepositoryItem";



export function RepositoryList() {
    return (
        <section lassName="repository-list" >
            <h1>Lista de repositório</h1>

            <ul>
                <ReposiroryItem/>
                <ReposiroryItem/>

            </ul>
        </section>
    );
}