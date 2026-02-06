import Link from "next/link";
import { Shield, FileText, Info } from "lucide-react";

export default function Politicas() {
    return (
        <div className="bg-[radial-gradient(circle_at_top_left,_#749B8F45_0%,_transparent_85%)] bg-white font-sans text-gray-700 min-h-screen">
            <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-sans text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
                    Políticas y Aviso Legal
                </h1>

                <div className="space-y-16">
                    {/* AVISO LEGAL */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <Info size={28} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">Aviso Legal</h2>
                        </div>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify">
                            <p>
                                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, a continuación se exponen los datos identificativos de las profesionales:
                            </p>
                            <div className="bg-[#749B8F]/5 p-6 rounded-xl space-y-2">
                                <p><strong>Nombre y apellidos:</strong> Elena Cervera Psicóloga - Psicoterapeuta COLEGIADA Nº A-1355</p>
                                <p><strong>Dirección:</strong> Calle Pedro IV El Ceremonioso, 11, 4ºC (50009)</p>
                                <p><strong>Teléfono:</strong> 645 132 766</p>
                                <p><strong>Correo electrónico:</strong> elenacervera@cop.es</p>
                            </div>
                            <p>
                                El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en la web <strong>www.elenacerverapsicologa.com</strong> están protegidos por la legislación española sobre los derechos de propiedad intelectual y no se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, ni su modificación, transformación o descompilación, ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo.
                            </p>
                            <p>
                                El usuario, única y exclusivamente, puede utilizar el material que aparezca en este sitio web para su uso personal y privado, quedando prohibido su uso con fines comerciales o para incurrir en actividades ilícitas. Todos los derechos derivados de la propiedad intelectual están expresamente reservados por Elena Cervera López.
                            </p>
                            <p>
                                La responsable velará por el cumplimiento de las anteriores condiciones como por la debida utilización de los contenidos presentados en sus páginas web, ejercitando todas las acciones civiles y penales que le correspondan en el caso de infracción o incumplimiento de estos derechos por parte del usuario.
                            </p>
                        </div>
                    </section>

                    {/* POLÍTICA DE COOKIES */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <Shield size={28} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">Política de Cookies</h2>
                        </div>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify">
                            <p><strong>www.elenacerverapsicologa.com</strong></p>
                            <p>
                                El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
                            </p>
                            <p>
                                Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
                            </p>
                            <p>
                                La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
                            </p>
                            <p>
                                Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800">Cookies propias</h3>
                                <p>
                                    Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
                                </p>

                                <h3 className="text-xl font-bold text-gray-800">Cookies de terceros</h3>
                                <p>
                                    Son cookies utilizadas y gestionadas por entidades externas que proporcionan servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
                                </p>
                                <p>
                                    La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dipositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
                                </p>
                                <p>
                                    Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza en el siguiente enlace: <a href="https://developers.google.com/analytics" target="_blank" rel="noopener noreferrer" className="text-[#749B8F] hover:underline">Google Analytics</a>.
                                </p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">Deshabilitar, rechazar y eliminar cookies</h3>
                            <p>
                                El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
                            </p>
                        </div>
                    </section>

                    {/* POLÍTICA DE PRIVACIDAD */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b-2 border-[#749B8F] pb-2 text-[#749B8F]">
                            <FileText size={28} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">Política de Privacidad</h2>
                        </div>
                        <div className="space-y-4 text-sm md:text-base leading-relaxed text-justify">
                            <p>
                                En cumplimiento del Reglamento General de Protección de Datos, (Reglamento UE 2016/679, en adelante RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos de Carácter Personal y Garantía de Derechos Digitales, en adelante LOPDGDD en relación a los datos de carácter personal que va a proporcionar se le informa:
                            </p>

                            <div className="bg-[#749B8F]/5 p-6 rounded-xl space-y-4">
                                <div>
                                    <p className="font-bold text-gray-800">Responsable del tratamiento:</p>
                                    <p>Nombre y apellidos: Elena Cervera Psicóloga - Psicoterapeuta COLEGIADA Nº A-1355</p>
                                    <p>Dirección: Calle Pedro IV El Ceremonioso, 11, 4ºC (50009)</p>
                                    <p>Teléfono: 645 132 766</p>
                                    <p>Correo electrónico: elenacervera@cop.es</p>
                                </div>

                                <div>
                                    <p className="font-bold text-gray-800">Finalidades:</p>
                                    <p>Gestión de los datos del usuario para remitirle la información de los servicios y actividades que solicita a través del formulario de la web www.elenacerverapsicologa.com</p>
                                </div>

                                <div>
                                    <p className="font-bold text-gray-800">Legitimación:</p>
                                    <p>Consentimiento del usuario por solicitud previa de información</p>
                                </div>

                                <div>
                                    <p className="font-bold text-gray-800">Conservación:</p>
                                    <p>Los datos personales del usuario no serán incluidos en ningún fichero, salvo que una vez atendida su solicitud de información, decida contratar los servicios de la psicóloga. En caso de no contratar el servicio, sus datos serán suprimidos.</p>
                                </div>

                                <div>
                                    <p className="font-bold text-gray-800">Cesiones:</p>
                                    <p>Los datos facilitados por el usuario no serán cedidos, salvo en cumplimiento de una obligación legal o que medie consentimiento expreso del mismo.</p>
                                </div>

                                <div>
                                    <p className="font-bold text-gray-800">Derechos:</p>
                                    <p>El usuario tiene los derechos reconocidos en el Reglamento General de Protección de Datos a acceder, rectificar y suprimir los datos, solicitar la portabilidad de los mismos, oponerse al tratamiento y solicitar la limitación de éste.</p>
                                </div>
                            </div>
                            <p>
                                Para el ejercicio de los derechos el usuario habrá de dirigirse a la responsable del fichero, junto con un documento acreditativo de su identidad y rellenando los formularios que se encuentran a su disposición a tal efecto.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center">
                    <Link href="/" className="text-[#749B8F] hover:underline font-bold">
                        ← Volver al Inicio
                    </Link>
                </div>
            </main>
        </div>
    );
}
