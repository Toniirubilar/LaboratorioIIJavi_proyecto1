import './App.css'

function Principal (){
  return (
    <>
      
      <div className="container">
        <div className="ppal">
        <h1>Datos importantes del campo</h1>
          <h3>Datos climáticos:</h3>
            <p><strong>Precipitacion:</strong><br />
          Cantidad de lluvia o nieve que cae en un período determinado. Es importante para determinar la cantidad de agua disponible para los cultivos y el ganado, y para planificar el riego.<br />
            <strong>Temperatura:</strong><br />
          Rango de temperaturas medias y extremas. Afecta el crecimiento y desarrollo de los cultivos, la salud del ganado y la incidencia de plagas y enfermedades.<br />
            <strong>Humedad:</strong><br />
          Nivel de humedad en el aire. Influye en la transpiración de los cultivos y la evaporación del agua del suelo.<br />
            <strong>Viento:</strong><br />
          Velocidad y dirección del viento. Puede afectar la polinización de los cultivos, la erosión del suelo y la propagación de plagas y enfermedades.<br />
            </p>
        <br />
        <h3>Datos del suelo:</h3>
        <p>
          <strong>Tipos de suelo:</strong><br />
          Textura, estructura y composición química del suelo. Determina la capacidad del suelo para retener agua y nutrientes, y el pH del suelo, que afecta la disponibilidad de nutrientes para las plantas.            <br />
            <strong>Fertilidad del suelo:</strong><br />
            Niveles de nutrientes disponibles en el suelo, como nitrógeno, fósforo y potasio. Es importante para determinar la cantidad de fertilizante que se necesita aplicar.            <br />
            <strong>Salud del suelo:</strong><br />
            Presencia de materia orgánica, actividad microbiana y estructura del suelo. Un suelo sano es esencial para el crecimiento saludable de los cultivos.            <br />
          </p><br />
          <h3>Datos económicos:</h3>
        <p>
          <strong>Costos de producción:</strong><br />
          Costos de los insumos, como semillas, fertilizantes, pesticidas, alimentación del ganado y mano de obra. Es importante para calcular la rentabilidad de la actividad agrícola o ganadera. <br />
          <strong>Precios de venta:</strong><br />
          Precios a los que se venden los productos agrícolas o ganaderos. Es importante para determinar los ingresos de la explotación. <br />
          <strong>Rentabilidad:</strong><br />
          Ganancia o pérdida que se obtiene de la actividad agrícola o ganadera. Es importante para evaluar la viabilidad del negocio.
        </p>
        </div>
        <div className="aside">
          <p>El sector agropecuario es un motor fundamental de la economía en muchos países, generando empleo, ingresos y divisas a través de la exportación de productos agrícolas. Además, impulsa el desarrollo de industrias relacionadas como la maquinaria agrícola, el procesamiento de alimentos y la logística.</p>
        </div>
      </div>
    </>

  )
}

export default Principal

