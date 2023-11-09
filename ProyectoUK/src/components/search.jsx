import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Search = () => {
    return (
        <>
            <main className="container py-5">
                <section className="row justify-content-center text-light">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <form id="search-input" className="mb-5">
                            <h2 className="mb-4 text-center text-black">Buscar Instituto/Universidad</h2>
                            <div className="input-group">
                                <input type="text" id="name" className="form-control" placeholder="Nombre del Instituto" />
                                <button type="submit" className="btn btn-primary">Buscar</button>
                            </div>
                        </form>

                        <div id="results"></div>

                        <div className="mb-4">
                            <h3 className="text-center text-black">Noticias destacadas</h3>
                        </div>

                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="../public/img/laCuencaDelPlata.jpg" className="d-block w-100" alt="La cuenca del plata" />
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/img/siglo21.png" className="d-block w-100" alt="Siglo 21" />
                                </div>
                                <div className="carousel-item">
                                    <img src="../public/img/UNAF.jpg" className="d-block w-100" alt="UNAF" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
