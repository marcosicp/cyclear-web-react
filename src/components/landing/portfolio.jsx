import React from "react";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.images = {
      imagesEnSierrasChicas: {
        image1:
          "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesKieroKuentos: {
        image1:
          "https://camo.githubusercontent.com/09838c503ae6cc81d6fc1749476b02844f5aa327826916f8226a272c54ba5e9d/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f666c5539374c61514c4269444342476f58574243366339575945305f316b646a74324c7364683968396b62626331585677565678714f79576438516f415036526c6b513d77313533362d683732362d7277",
        image2:
          "https://camo.githubusercontent.com/5d1547bb3fd36db0696346623e5d505b50426791f7629614a66926f4bc003fcd/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f684234626b34427239583166555f67383257324a5a7a39744d6c5441554f5a5f72475f4a45774e73413431575933746667676d446a36587038494e38577470766f5f413d77313533362d683535382d7277",
        image3:
          "",
        image4:
          "",
      },

      imagesClinker: {
        image1:
          "",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesCyclearApp: {
        image1:
          "https://camo.githubusercontent.com/873a57da19d6f585bd26a207a27e60033fdbe0967b48d54c7f9254df855e868c/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f49733664707644575f432d596a547878726471314b654b624c545943316f5435544d4c334f58485468723272326a545963696c787237565834626e6e4e5541644975733d77313533362d683732362d7277",
        image2:
          "https://camo.githubusercontent.com/c5117cc65c81f3e828d6064d974043aecbe7bc436e7b8300fa369499dc1509d1/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f44315a4a2d6539636e5f6e6d51596d364a5571576d6d55476a5f376e33664e426138584568554351345233684d666741397a4648327a3579547a3564435f4e437051733d77313533362d683335382d7277",
        image3:
          "https://camo.githubusercontent.com/14e9635973ea53cd2c269bfe386f064d6dd79b9d3b6895012a35749d37a02790/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f35483153636165775566327670393171715a6247394a536b6c424c61326f435a724a4e314e51624652514c75795573687552564773596a34575f704b4153354c7868593d77313533362d683335382d7277",
      },

      imagesRugbyApp: {
        image1:
          "https://github.com//rugbynewsapp/raw/master/assets/screenshots/Captura2.PNG",
        image2:
          "https://github.com//rugbynewsapp/raw/master/assets/screenshots/Captura.PNG",
        image3:
          "https://github.com//rugbynewsapp/raw/master/assets/screenshots/Captura3.PNG",
      },

      imagesPosSales: {
        image1:
          "https://github.com//pos-sales-angular/raw/master/src/assets/imagenes/screenshot.PNG",
        image2:
          "https://github.com//pos-sales-angular/raw/master/src/assets/imagenes/Captura2.PNG",
        image3:
          "https://github.com//pos-sales-angular/raw/master/src/assets/imagenes/Captura.PNG",
      },
    };
  }

  render() {
    return (
      <section id="beneficios" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">BENEFICIOS CYCLEAR</h3>
                <p className="subtitle-a">
                  Check some of the projects I have been working on
                </p>
                <div className="line-mf"></div>
              </div>
              <label>CONSTANCIA DE DESTINO FINAL</label>
              <div>
                {" "}
                -Tipo de material reciclado. -Métricas y estadísticas que
                contribuyen a la disminución de la huella de carbono y tu
                impacto en el ambiente.
              </div>
              <br />
              <label></label>
              <label></label>
              <label></label>
              <label></label>
              <label></label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
