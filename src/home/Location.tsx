import { APIProvider, Map,Marker } from '@vis.gl/react-google-maps';

const Location = () => {
  const API_KEY = "AIzaSyDMfjH_5sMmopmUzJl4OIO5y4uFvDbWkLo";
  const position = { lat: -12.063645224191141, lng: -76.95069313521265 };
  return (
    <section id="mapa" className="py-16 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-foreground uppercase tracking-wider">
            Encuéntranos
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg">
            Ven a disfrutar del mejor café en un ambiente diseñado para tu comodidad. ¡Te esperamos!
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-muted/20 h-[500px] w-full">
          <APIProvider apiKey={API_KEY}>
            <Map
              defaultCenter={position}
              defaultZoom={17}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            >
              <Marker position={position} title="DaniCoffe" />
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};

export default Location;
