import cardstyle from '../styles/card.module.css'

type CardProps = {
    title: string;
    image: string;
    alt: string;
}

function Card({ title, image, alt }: CardProps) {
    return (
        <div className={cardstyle.card}>
            <img src={image} alt={alt} />
            <div className={cardstyle.text}>
                <h1>{title}</h1>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button id={cardstyle.btn}>Comprar agora!</button>
            </div>
        </div>
    )
}

export default Card