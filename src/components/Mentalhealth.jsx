import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Mentalhealth = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className="w-screen h-[700px]">
        <p className="font-newfont text-5xl mb-10 pb-7 p-5 text-center " data-aos="fade-in"   data-aos-delay="600" >
          You're Not Alone! Reach Out
        </p>

        <div className="p-4 mx-auto container  flex flex-row justify-center">
          <div className="flex flex-row w-full">
            <div className="w-2/3 p-5 font-save">
              <div className="bg-opacity-60 border- bg-neworange shadow-lg rounded-md p-5 h-96 overflow-y-scroll">
                <h2 className="text-3xl mb-4 font-newfont"  >
                  Feeling Down? Reach Out to These Lifelines{" "}
                </h2>
                <ul className="list-disc pl-10 pb-10">
                  <li>
                    <strong>Algeria:</strong> 0021 3983 2000 58 (Algerian
                    Society for the Prevention of Suicide)
                  </li>
                  <li>
                    <strong>Angola:</strong> +244 923 19 59 95 (Conselho
                    Nacional de Saúde Pública)
                  </li>
                  <li>
                    <strong>Benin:</strong> +229 21 32 10 99 (Hopital de l'Ordre
                    de Malte)
                  </li>
                  <li>
                    <strong>Botswana:</strong> 3911270 (Botswana Lifeline)
                  </li>
                  <li>
                    <strong>Burkina Faso:</strong> +226 25 38 59 65 (Association
                    SOS Suicide)
                  </li>
                  <li>
                    <strong>Burundi:</strong> +257 22 22 05 05 (Centres de Soins
                    Mentaux)
                  </li>
                  <li>
                    <strong>Cabo Verde:</strong> +238 262 14 15 (INSP Cabo
                    Verde)
                  </li>
                  <li>
                    <strong>Cameroon:</strong> +237 222 31 15 24 (Centre
                    Hospitalier Universitaire de Yaoundé)
                  </li>
                  <li>
                    <strong>Central African Republic:</strong> +236 70 50 00 01
                    (Hôpital Communautaire de Bangui)
                  </li>
                  <li>
                    <strong>Chad:</strong> +235 22 52 53 45 (Hôpital Général de
                    Référence Nationale)
                  </li>
                  <li>
                    <strong>Comoros:</strong> +269 773 16 16 (Centre National de
                    Psychiatrie de Fomboni)
                  </li>
                  <li>
                    <strong>Democratic Republic of the Congo:</strong> +243 815
                    555 879 (SOS Suicide RDC)
                  </li>
                  <li>
                    <strong>Djibouti:</strong> +253 21 35 13 45 (Ministère de la
                    Santé Djibouti)
                  </li>
                  <li>
                    <strong>Egypt:</strong> 7621602 (Befrienders Cairo)
                  </li>
                  <li>
                    <strong>Equatorial Guinea:</strong> +240 333 09 20 27
                    (Hospital General de Malabo)
                  </li>
                  <li>
                    <strong>Eritrea:</strong> +291 1 12 39 72 (Ministry of
                    Health Eritrea)
                  </li>
                  <li>
                    <strong>Eswatini (Swaziland):</strong> 977 (Eswatini
                    National Psychiatric Hospital)
                  </li>
                  <li>
                    <strong>Ethiopia:</strong> +251 11 111 22 12 (Ethiopian
                    Suicide Prevention Network)
                  </li>
                  <li>
                    <strong>Gabon:</strong> +241 01 74 05 16 (Hôpital de Melen)
                  </li>
                  <li>
                    <strong>Gambia:</strong> +220 449 44 34 (Gambia Mental
                    Health Association)
                  </li>
                  <li>
                    <strong>Ghana:</strong> +233 302 222 911 (Mental Health
                    Authority Ghana)
                  </li>
                  <li>
                    <strong>Guinea:</strong> +224 622 35 67 89 (Hopital Donka)
                  </li>
                  <li>
                    <strong>Guinea-Bissau:</strong> +245 320 77 82 (Centro de
                    Apoio Psicossocial)
                  </li>
                  <li>
                    <strong>Ivory Coast:</strong> +225 21 25 50 50 (Institut de
                    l'Hôpital Psychiatrique de Bingerville)
                  </li>
                  <li>
                    <strong>Kenya:</strong> +254 20 2051323 (Befrienders Kenya)
                  </li>
                  <li>
                    <strong>Lesotho:</strong> +266 22 31 45 52 (Ministry of
                    Health Lesotho)
                  </li>
                  <li>
                    <strong>Liberia:</strong> +231 886 264 886 (Liberia Mental
                    Health Association)
                  </li>
                  <li>
                    <strong>Libya:</strong> +218 21 340 33 70 (National Center
                    for Disease Control)
                  </li>
                  <li>
                    <strong>Madagascar:</strong> +261 20 22 410 11 (Centre
                    Hospitalier de Soavinandriana)
                  </li>
                  <li>
                    <strong>Malawi:</strong> +265 1 75 08 56 (St. John of God
                    Hospitaller Services)
                  </li>
                  <li>
                    <strong>Mali:</strong> +223 20 22 20 50 (Hôpital du Point G)
                  </li>
                  <li>
                    <strong>Mauritania:</strong> +222 45 25 34 56 (Centre
                    Hospitalier National de Nouakchott)
                  </li>
                  <li>
                    <strong>Mauritius:</strong> +230 800 93 93 (Befrienders
                    Mauritius)
                  </li>
                  <li>
                    <strong>Morocco:</strong> +212 537 77 35 64 (Centre
                    Hospitalier Ibn Sina)
                  </li>
                  <li>
                    <strong>Mozambique:</strong> +258 21 31 02 17 (Hospital
                    Central de Maputo)
                  </li>
                  <li>
                    <strong>Namibia:</strong> +264 61 22 44 66
                    (Lifeline/Childline Namibia)
                  </li>
                  <li>
                    <strong>Niger:</strong> +227 20 75 31 51 (Centre National de
                    Psychiatrie de Niamey)
                  </li>
                  <li>
                    <strong>Nigeria:</strong> +234 806 210 6493 (Mental Health
                    Foundation)
                  </li>
                  <li>
                    <strong>Rwanda:</strong> +250 788 38 38 82 (Rwanda Mental
                    Health Association)
                  </li>
                  <li>
                    <strong>Sao Tome and Principe:</strong> +239 222 22 22
                    (Hospital Central Ayres de Menezes)
                  </li>
                  <li>
                    <strong>Senegal:</strong> +221 33 889 38 38 (Hôpital Fann)
                  </li>
                  <li>
                    <strong>Seychelles:</strong> +248 428 19 13 (Ministry of
                    Health Seychelles)
                  </li>
                  <li>
                    <strong>Sierra Leone:</strong> +232 22 22 25 52 (Sierra
                    Leone Psychiatric Hospital)
                  </li>
                  <li>
                    <strong>Somalia:</strong> +252 61 515 15 15 (Mental Health
                    Hospital Hargeisa)
                  </li>
                  <li>
                    <strong>South Africa:</strong> 0800 567 567 (Suicide Crisis
                    Helpline)
                  </li>
                  <li>
                    <strong>South Sudan:</strong> +211 911 22 22 22 (Juba
                    Teaching Hospital)
                  </li>
                  <li>
                    <strong>Sudan:</strong> +249 18 37 77 777 (Sudan Psychiatric
                    Association)
                  </li>
                  <li>
                    <strong>Tanzania:</strong> +255 22 21 21 94 3 (Muhimbili
                    National Hospital)
                  </li>
                  <li>
                    <strong>Togo:</strong> +228 22 21 21 21 (CHU Sylvanus
                    Olympio)
                  </li>
                  <li>
                    <strong>Tunisia:</strong> +216 71 24 44 44 (Ligne Verte
                    National)
                  </li>
                  <li>
                    <strong>Uganda:</strong> 0800 122 123 (Strong Minds Uganda)
                  </li>
                  <li>
                    <strong>Zambia:</strong> +260 21 12 23 94 0 (Lifeline
                    Zambia)
                  </li>
                  <li>
                    <strong>Zimbabwe:</strong> +263 4 253 28 5 (Friendship Bench
                    Zimbabwe)
                  </li>
                  <li>
                    <strong>USA:</strong> 1-800-273-8255 (National Suicide
                    Prevention Lifeline)
                  </li>
                  <li>
                    <strong>Canada:</strong> 1-833-456-4566 (Crisis Services
                    Canada)
                  </li>
                  <li>
                    <strong>UK:</strong> 116 123 (Samaritans)
                  </li>
                  <li>
                    <strong>Australia:</strong> 13 11 14 (Lifeline)
                  </li>
                  <li>
                    <strong>India:</strong> 91-22-2772 6771 (Aasra)
                  </li>
                  <li>
                    <strong>New Zealand:</strong> 0508 828 865 (Lifeline)
                  </li>
                  <li>
                    <strong>South Africa:</strong> 0800 567 567 (Suicide Crisis
                    Helpline)
                  </li>
                  <li>
                    <strong>Japan:</strong> 03-5774-0992 (Tokyo Mental Health)
                  </li>
                  <li>
                    <strong>Germany:</strong> 0800 111 0 111 (Telefonseelsorge)
                  </li>
                  <li>
                    <strong>France:</strong> 01 45 39 40 00 (SOS Suicide)
                  </li>
                  <li>
                    <strong>Italy:</strong> 800 86 00 22 (Telefono Amico)
                  </li>
                  <li>
                    <strong>Spain:</strong> 914 590 055 (Teléfono de la
                    Esperanza)
                  </li>
                  <li>
                    <strong>Mexico:</strong> 5255102550 (SAPTEL)
                  </li>
                  <li>
                    <strong>Brazil:</strong> 188 (CVV)
                  </li>
                  <li>
                    <strong>Argentina:</strong> 135 (SOS Un Amigo Anonimo)
                  </li>
                  <li>
                    <strong>Chile:</strong> 56 2 2222 3454 (Telefono de la
                    Esperanza)
                  </li>
                  <li>
                    <strong>Colombia:</strong> 106 (Telefono Amigo)
                  </li>
                  <li>
                    <strong>Peru:</strong> 113 (Telefono de la Esperanza)
                  </li>
                  <li>
                    <strong>China:</strong> 400 161 9995 (Lifeline China)
                  </li>
                  <li>
                    <strong>Hong Kong:</strong> 2382 0000 (The Samaritan
                    Befrienders Hong Kong)
                  </li>
                  <li>
                    <strong>South Korea:</strong> 1577-0199 (Lifeline Korea)
                  </li>
                  <li>
                    <strong>Philippines:</strong> 2919 (Hopeline)
                  </li>
                  <li>
                    <strong>Singapore:</strong> 1800-221 4444 (Samaritans of
                    Singapore)
                  </li>
                  <li>
                    <strong>Malaysia:</strong> 03-7956 8145 (Befrienders Kuala
                    Lumpur)
                  </li>
                  <li>
                    <strong>Indonesia:</strong> (021) 500454 (Save Indonesia)
                  </li>
                  <li>
                    <strong>Thailand:</strong> 02 713 6793 (Samaritans of
                    Thailand)
                  </li>
                  <li>
                    <strong>Vietnam:</strong> 1900 630 201 (Support 24/7)
                  </li>
                  <li>
                    <strong>Russia:</strong> 8 (800) 100-90-50 (Trust Line)
                  </li>
                  <li>
                    <strong>Ukraine:</strong> 7333 (Lifeline Ukraine)
                  </li>
                  <li>
                    <strong>Turkey:</strong> 182 (Ministry of Health Counseling)
                  </li>

                  <li>
                    <strong>Israel:</strong> 1201 (ERAN)
                  </li>
                  <li>
                    <strong>United Arab Emirates:</strong> 800 4673 (National
                    Program for Happiness and Positivity)
                  </li>
                  <li>
                    <strong>Saudi Arabia:</strong> 920020800 (Mental Health
                    Service)
                  </li>
                  <li>
                    <strong>Pakistan:</strong> 042 35761999 (UMANG)
                  </li>
                  <li>
                    <strong>Bangladesh:</strong> 88 02 912 8563 (Kaan Pete Roi)
                  </li>
                </ul>
              </div>
            </div>

            <div className="font-newfont text-5xl mb-10 p-5 text-center items-center flex flex-col justify-center w-1/3" data-aos="slide-left"   data-aos-delay="600"  data-aos-duration="1000">
              Help Lines
            </div>
          </div>
        </div>
        <div className="container text-justify mx-auto mb-16 font-navFont mt-10">
          <div className="flex justify-center ">
          <Link to={"/resources"}>
            <div className="flex text-black  px-9 duration-150 hover:animate-bounce  hover:border-b-2 hover:border-neworange hover:cursor-pointer border-black font-newfont" data-aos="zoom-in" data-aos-offset="100"   data-aos-delay="50"    data-aos-duration="1000">
              Explore Resources {" "}
              <svg
                className="w-4 ml-3"
  
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Mentalhealth;
