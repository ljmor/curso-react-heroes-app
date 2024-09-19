import { Link } from "react-router-dom";

export const HeroCard = ({ heroe }) => {

    const heroImgUrl = `/heroes/${ heroe.id }.jpg`;

    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 animate__animated animate__fadeIn">
                            <img src={heroImgUrl} alt={heroe.superhero} className="card-img" />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-tiltle">{heroe.superhero}</h5>
                                <p className="card-text">{heroe.alter_ego}</p>
                                {
                                    (heroe.alter_ego !== heroe.characters) && (<p>{heroe.characters}</p>)
                                }
                                <p className="card-text">
                                    <small className="text-muted">{heroe.first_appearance}</small>
                                </p>

                                <Link to={`/hero/${heroe.id}`}>
                                    More Info..
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
