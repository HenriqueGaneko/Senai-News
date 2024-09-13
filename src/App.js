import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-red-700 p-2">
        <h1 className="text-white font-black text-xl">SenaiNews</h1>
        <nav className="flex gap-6">
          <a className="text-white font-semibold" href="#">
            Home
          </a>
          <a className="text-white font-semibold" href="#">
            Sobre
          </a>
          <a className="text-white font-semibold" href="#">
            Contato
          </a>
        </nav>
      </header>
      <main className="mx-6 flex-1 flex-row">
        <h2 className="mt-4 text-xl">Pincipais noticias</h2>
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img className="w-52" src="https://www.enfoquems.com.br/wp-content/uploads/2020/09/corinthians_p000Pmj_widexl.jpeg/ 300x200" />
            <h3>Corinthians classificado!</h3>
            <p>Juiz fez a parte dele.</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmc9wV-mjuG1kC04yxAz-vg-6Jb_wOezIMEw&s/ 300x200" />
            <h3>Mengo ganhou mais uma vez!</h3>
            <p>segue o lider.</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJ11qm27463iVFX_94aPKzuyLXxN_E5cT5Q&s/ 300x200" />
            <h3>Grêmio toma virada no final!</h3>
            <p>Que azar kkkkkkkk .</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img src="https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png/ 300x200" />
            <h3>Vasco empata com o Galo!</h3>
            <p>Que jogo feio.</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img src="https://yt3.googleusercontent.com/C8rCyrTuhCFBj7U0Od4-4ISbgp5i7OMfAudqi2h7vgcFOy70J6pSao6qG0YO6p7LpdTqlqbceQ=s900-c-k-c0x00ffffff-no-rj/ 300x200" />
            <h3>São paulo ganha do fluminense!</h3>
            <p>Parabéns aos envolvidos.</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
          <div className="p-2 flex flex-col justify-center items-center rounded border-2 border-gray-700 w-[400px]">
            <img src="https://www.ogol.com.br/img/history/imgS620I11716T20190403225419.png/ 300x200" />
            <h3>Jogo roubado contra o Inter!</h3>
            <p>bandeirinha é foda.</p>
            <a className="bg-red-600 p-2 w-full" href="#">Ver mais</a>
          </div>
        </div>


      </main>
      <footer className="bg-red-600 p-2 text-white text-center">
        <h4>Todos direitos reservados - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
