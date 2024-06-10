import './footer.css';

export default function Footer() {
 return(
    <footer class="bg-black text-white text-center p-[20px] w-full mt-[20px] bottom-0">
        <div>
            <h3>Acadêmicos:</h3>
            <p> Guilherme Tamanini, Murilo Watanabe, Vinicius</p>
        </div>
        <div>
            <a class="text-white" id='footer-achor' href="https://github.com/MuriloWatanabe/projetouiux"><h3>Ir para o GitHub do projeto:</h3></a>
        </div>
        <div>
            <p>© 2024</p>
        </div>
    </footer>
 )
}