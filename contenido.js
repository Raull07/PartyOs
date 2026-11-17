/* ============================================================================
 *  PartyOS · CONTENIDO EDITABLE  (contenido.js)
 *  ---------------------------------------------------------------------------
 *  Aquí editas TODAS las preguntas del juego. No hace falta tocar partyos.html.
 *
 *  CÓMO SE USA
 *    1. Edita este archivo y guárdalo.
 *    2. Haz doble clic en  generar.cmd  ->  crea  partyos-solo.html  (un único
 *       archivo con el juego y las preguntas dentro, listo para compartir).
 *    3. Si subes a GitHub Pages: sube  partyos.html + contenido.js + sw.js.
 *       El HTML carga este archivo en tiempo real, así que no hace falta
 *       regenerar nada: tus cambios se ven al recargar.
 *
 *  ESTRUCTURA
 *    window.PARTY_CONTENT.decks.<MAZO>
 *        label      Texto del botón del mazo
 *        icon       Emoji del botón
 *        deckName   Nombre que aparece en la TV
 *        quien      Preguntas de "¿Quién de aquí...?"  (cat: suave | delicada |
 *                   cruel | brutal | profundo)
 *    window.PARTY_CONTENT.shared
 *        dares            Retos del modo beber
 *        avatars          Avatares/Emojis de los jugadores
 *        events           Eventos aleatorios (Ronda Doble, etc.)
 *        escribioBots     Frases que escriben los bots en "¿Quién lo escribió?"
 *
 *  REGLAS IMPORTANTES
 *    - Un mazo hereda del GENERAL todo lo que no defina (trivia, dilemas...).
 *      Si un mazo define "quien", sustituye a las preguntas del general.
 *    - En trivia, "correct" es el índice de la opción correcta empezando en 0.
 *    - No te olvides de la coma final de cada línea.
 *    - Si el archivo tiene un error de sintaxis, el juego avisa y arranca con
 *      un contenido mínimo de respaldo.
 * ============================================================================ */

window.PARTY_CONTENT = {
  decks: {

    /* ========================================================================
     *  MAZO: ✨ General (Todos)
     *  (Solo define "quien"; el resto lo hereda del mazo GENERAL.)
     * ==================================================================== */
    "general": {
      label: "✨ General (Todos)",
      icon: "✨",
      deckName: "General · Grupo Completo",

      /* --- JUEGO: ¿Quién de aquí...? --- */
      quien: [
        /* --- 🟢 CALENTAMIENTO (suave) --- */
        { cat: "suave", text: "¿Quién moriría primero en una película de terror por ir a investigar un ruido raro?" },
        { cat: "suave", text: "¿Quién tarda más días en contestar un simple mensaje de WhatsApp?" },
        { cat: "suave", text: "¿Quién ganaría un reality show tipo Supervivientes sin despeinarse?" },
        { cat: "suave", text: "¿Quién llegaría tarde incluso a su propia boda?" },
        { cat: "suave", text: "¿Quién se cree chef profesional pero se le quema hasta el agua?" },
        { cat: "suave", text: "¿Quién acabaría perdido en otro país sin batería y sin saber el idioma?" },
        { cat: "suave", text: "¿Quién se gasta el dinero en caprichos el mismo día que lo cobra?" },
        { cat: "suave", text: "¿Quién tiene más papeletas para hacerse viral en TikTok por una liada?" },
        { cat: "suave", text: "¿Quién sobrevive peor sin mirar el móvil durante 24 horas?" },
        { cat: "suave", text: "¿Quién se ha visto una temporada entera de anime de 24 capítulos en un finde sin ver la luz del sol?" },
        { cat: "suave", text: "¿Quién pondría a su futura mascota el nombre de un personaje de anime o videojuego?" },
        { cat: "suave", text: "¿Quién se sabe más openings de anime de memoria que temas de clase o del trabajo?" },
        { cat: "suave", text: "¿Quién intenta ocultar su lado friki con gente nueva pero a los 10 minutos ya está explicando el lore de su serie favorita?" },
        { cat: "suave", text: "¿Quién conduce como si estuviera clasificando en Monza cuando solo va a por un kebab?" },
        { cat: "suave", text: "¿Quién lleva meses con un testigo encendido en el cuadro del coche diciendo «eso no es nada, aguanta»?" },
        { cat: "suave", text: "¿Quién se gira a mirar cada coche deportivo que pasa por la calle como si fuera el amor de su vida?" },
        { cat: "suave", text: "¿Quién tarda más tiempo en aparcar en línea mientras todo el grupo mira desde fuera?" },
        /* --- 🟡 SALSEO / DELICADAS (delicada) --- */
        { cat: "delicada", text: "¿Quién desaparece del mapa en cuanto se echa pareja y solo resucita cuando hay plan gratis?" },
        { cat: "delicada", text: "¿Quién da los mejores consejos amorosos del grupo sin haber tenido una relación estable en su vida?" },
        { cat: "delicada", text: "¿Quién hace ghosting profesional en cuanto alguien le muestra un mínimo de interés?" },
        { cat: "delicada", text: "¿Quién tiene la lupa de Instagram más comprometedora de toda esta sala?" },
        { cat: "delicada", text: "¿Quién se enamora hasta las trancas de alguien que le responde cada 14 horas?" },
        { cat: "delicada", text: "¿Quién manda audios de 4 minutos de fiesta de los que se arrepiente al despertar?" },
        { cat: "delicada", text: "¿Quién liga peor cuando lleva un par de copas de más?" },
        { cat: "delicada", text: "¿Quién se pone más celoso/a mirando de reojo el móvil de su pareja aunque diga que confía al 100%?" },
        { cat: "delicada", text: "¿Quién se gasta antes 2.000 € en unas llantas o en el coche que en renovar su armario?" },
        { cat: "delicada", text: "¿Quién ha llorado más con la muerte de un personaje de anime o serie que con un problema real?" },
        { cat: "delicada", text: "¿Quién exagera más sus historias cuando cuenta una anécdota delante de gente nueva?" },
        { cat: "delicada", text: "¿Quién tiene más mensajes borrados en WhatsApp o Instagram?" },
        /* --- 🟠 CRUELES (cruel) --- */
        { cat: "cruel", text: "¿Quién tiene el ego más frágil y se pica antes con una broma?" },
        { cat: "cruel", text: "¿Quién es la persona más rata del grupo a la hora de pagar rondas o hacer Bizum?" },
        { cat: "cruel", text: "¿Quién cae peor a primera vista cuando conoce a gente nueva?" },
        { cat: "cruel", text: "¿Quién se cree muchísimo mejor conductor/a de lo que realmente es?" },
        { cat: "cruel", text: "¿Quién es la persona más mentirosa de esta habitación?" },
        { cat: "cruel", text: "¿Quién se vuelve más pesado/a cuando bebe más de la cuenta?" },
        { cat: "cruel", text: "¿Quién nunca organiza ningún plan pero siempre es quien más se queja?" },
        { cat: "cruel", text: "¿Quién tiene más papeletas para acabar arruinado/a por malas decisiones financieras?" },
        { cat: "cruel", text: "¿Quién se cree el gracioso o la graciosa del grupo pero la mitad de sus chistes no hacen gracia?" },
        { cat: "cruel", text: "¿Quién es más manipulador/a cuando quiere salirse con la suya en un plan?" },
        /* --- 🔴 BRUTALES (brutal) - solo si eliges ese modo --- */
        { cat: "brutal", text: "¿Quién de aquí va de santo/a pero tiene el historial más oscuro de toda la sala?" },
        { cat: "brutal", text: "¿Quién se abriría una cuenta privada de pago antes si necesitara dinero rápido?" },
        { cat: "brutal", text: "¿Quién tiene más probabilidades de acabar en el calabozo una noche de fiesta?" },
        { cat: "brutal", text: "¿Quién ha hecho algo tan turbio que si saliera a la luz cambiaría cómo lo vemos?" },
        { cat: "brutal", text: "¿Quién acabaría en La Isla de las Tentaciones haciendo el ridículo nacional?" },
        { cat: "brutal", text: "¿Quién tiene más posibilidades de desaparecer del mapa y empezar otra vida sin avisar?" },
        /* --- 🧠 PROFUNDO / DEBATE (profundo) --- */
        { cat: "profundo", text: "Si perdieras la memoria por completo mañana, ¿a quién de esta sala elegirías para que te contara quién eras, tus secretos y cómo es tu vida?" },
        { cat: "profundo", text: "Si tuvieras un problema muy grave a las 4 de la mañana, ¿a quién de aquí llamarías en primer lugar?" },
        { cat: "profundo", text: "¿Quién lleva por dentro mucha más presión o carga mental de la que demuestra?" },
        { cat: "profundo", text: "¿A quién de esta sala le confiarías un secreto que podría arruinarte la vida si se supiera?" },
        { cat: "profundo", text: "¿Quién es la persona más leal del grupo pase lo que pase?" },
        { cat: "profundo", text: "¿Quién de aquí tiene más posibilidades de triunfar a lo grande en los próximos 5 años?" },
        { cat: "profundo", text: "Dentro de 15 años, ¿quién será quien mantenga unido al grupo pase lo que pase?" },
        { cat: "profundo", text: "¿A quién acudirías si necesitaras un consejo 100% honesto aunque duela escucharlo?" },
        { cat: "profundo", text: "¿Quién de esta sala tiene el corazón más noble cuando nadie está mirando?" },
        { cat: "profundo", text: "¿Quién crees que va a dar el cambio de vida más radical de aquí a 3 años?" },
      ],

      /* --- JUEGO: El Impostor (pares de palabras) --- */
      impostor: {
        /* --- Categoría: Fiesta y Noche --- */
        "Fiesta y Noche": [
          ["Discoteca", "Pub"],
          ["Reservado VIP", "Zona de prensa"],
          ["Botellón", "Barbacoa"],
          ["Resaca", "Insolación"],
          ["Portero", "Guardaespaldas"],
          ["Chupito", "Café expreso"],
          ["After", "Desayuno"],
          ["DJ", "Productor musical"],
          ["Pulsera VIP", "Entrada de cine"],
          ["Taxi de vuelta", "Autobús nocturno"],
        ],
        /* --- Categoría: Coches y Motor --- */
        "Coches y Motor": [
          ["ITV", "Taller mecánico"],
          ["Rotonda", "Cruce con semáforo"],
          ["BMW", "Mercedes-Benz"],
          ["Ferrari", "Lamborghini"],
          ["Turbo", "Óxido nitroso"],
          ["Gasolinera", "Electrolinera"],
          ["Radar de tramo", "Control de alcoholemia"],
          ["Autoescuela", "Circuito de karts"],
          ["Freno de mano", "Embrague"],
          ["Llantas", "Neumáticos"],
        ],
        /* --- Categoría: Anime y Friki --- */
        "Anime y Friki": [
          ["Naruto", "Dragon Ball"],
          ["Attack on Titan", "Tokyo Ghoul"],
          ["Satoru Gojo", "Sukuna"],
          ["Cosplay", "Disfraz de Carnaval"],
          ["Manga", "Cómic americano"],
          ["Studio Ghibli", "Pixar"],
          ["One Piece", "Piratas del Caribe"],
          ["Katana", "Espada medieval"],
          ["Opening", "Tráiler"],
          ["Death Note", "Código Penal"],
        ],
        /* --- Categoría: Lugares --- */
        "Lugares": [
          ["Hospital", "Clínica dental"],
          ["Cárcel", "Comisaría"],
          ["Aeropuerto", "Estación de tren"],
          ["Gimnasio", "Box de CrossFit"],
          ["Playa", "Piscina"],
          ["Cine", "Teatro"],
          ["Casino", "Bingo"],
          ["Sauna", "Spa"],
          ["IKEA", "Leroy Merlin"],
          ["Universidad", "Instituto"],
        ],
        /* --- Categoría: Comida y Bebida --- */
        "Comida y Bebida": [
          ["Kebab", "Burrito"],
          ["Sushi", "Poke bowl"],
          ["Tortilla con cebolla", "Tortilla sin cebolla"],
          ["Paella", "Arroz al horno"],
          ["Croquetas", "Nuggets"],
          ["Hamburguesa", "Sándwich"],
          ["Cerveza", "Sidra"],
          ["Ramen", "Fideos chinos"],
          ["Churros", "Porras"],
          ["Pizza con piña", "Pizza cuatro quesos"],
        ],
        /* --- Categoría: Internet y Gaming --- */
        "Internet y Gaming": [
          ["Ibai Llanos", "IlloJuan"],
          ["ElXokas", "Jordi Wild"],
          ["Cristiano Ronaldo", "Leo Messi"],
          ["Bad Bunny", "Quevedo"],
          ["Rosalía", "Aitana"],
          ["Twitch", "YouTube"],
          ["TikTok", "Instagram Reels"],
          ["GTA V", "Red Dead Redemption"],
          ["Valorant", "Counter-Strike"],
          ["FIFA / EA FC", "Rocket League"],
        ],
      },

      /* --- JUEGO: ¿Quién lo escribió? (frases para completar) --- */
      escribioPrompts: [
        "Mi mayor «red flag» que nunca admito en una primera cita es...",
        "La excusa más absurda que he puesto para no salir de casa fue...",
        "Una opinión impopular que tengo sobre este grupo es...",
        "Lo más raro que he buscado en Google últimamente es...",
        "Si mañana me tocara la lotería, lo primero que haría sin decírselo a nadie sería...",
        "Mi mayor liada al volante o en un coche fue...",
        "El personaje de anime, serie o juego del que estuve pillado/a de pequeño/a es...",
        "Algo que hago cuando estoy solo/a en casa y me daría vergüenza admitir es...",
        "La mayor mentira que he contado para quedar bien delante de alguien fue...",
        "Mi peor compra impulsiva de la que todavía me arrepiento es...",
        "Si pudiera borrar un recuerdo concreto de mi pasado, borraría...",
        "La excusa más ridícula que he usado para cancelar un plan de última hora es...",
        "Algo que me da un cringe absoluto recordar de mi época de instituto es...",
        "La vez que más vergüenza ajena sentí por alguien de mi grupo fue cuando...",
        "Un secreto que nunca le he contado a nadie de mi familia es...",
        "El peor mensaje que he enviado a la persona equivocada fue...",
        "Si pudiera cambiar una sola decisión de mi vida, cambiaría...",
        "Lo más caro que he roto sin confesar todavía es...",
        "Una manía absurda que tengo y que nadie de aquí conoce es...",
        "Escribe una confesión libre para que adivinen que fuiste tú:",
      ],

      /* --- JUEGO: Piensa como el grupo --- */
      mente: [
        { prompt: "El mejor sabor de helado del mundo:", options: ["Chocolate", "Vainilla", "Stracciatella", "Limón"] },
        { prompt: "Algo imprescindible en una isla desierta:", options: ["Mechero", "Cuchillo", "Botella de agua", "Móvil con batería"] },
        { prompt: "La mejor excusa para llegar 20 minutos tarde:", options: ["Tráfico / Atascos", "Me quedé dormido/a", "Urgencia familiar", "No encontraba aparcamiento"] },
        { prompt: "El superpoder definitivo:", options: ["Invisibilidad", "Teletransporte", "Leer mentes", "Parar el tiempo"] },
        { prompt: "Comida de resaca por excelencia:", options: ["Kebab", "Hamburguesa", "Pizza fría", "Tortilla de patatas"] },
        { prompt: "Coche soñado si el dinero no importara:", options: ["Porsche 911", "Nissan GT-R", "Ferrari", "Audi RS6"] },
        { prompt: "Mejor plan un domingo por la tarde:", options: ["Maratón de anime/series", "Dar una vuelta en coche", "Videojuegos", "Dormir la siesta"] },
        { prompt: "Lo primero que miras en una persona:", options: ["La sonrisa / cara", "Cómo viste", "El sentido del humor", "La mirada"] },
        { prompt: "Destino ideal para un viaje de los 10:", options: ["Japón", "Ibiza / Mallorca", "Ámsterdam", "Ruta por Italia"] },
        { prompt: "Peor cosa que te puede pasar conduciendo:", options: ["Pinchar una rueda", "Quedarte sin gasolina", "Que salte un radar", "Calar el coche en cuesta"] },
        { prompt: "El mejor plan para una primera cita:", options: ["Cena tranquila", "Cine", "Pasear y tomar algo", "Quedarse en casa viendo series"] },
        { prompt: "La red social que más engancha:", options: ["TikTok", "Instagram", "YouTube", "X / Twitter"] },
        { prompt: "Lo que más miedo da en una relación:", options: ["Los celos", "La rutina", "La distancia", "La familia política"] },
        { prompt: "El mejor coche para un viaje largo:", options: ["SUV familiar", "Deportivo", "Furgoneta camper", "Berlina"] },
        { prompt: "La peor forma de terminar una relación:", options: ["Por WhatsApp", "En persona delante de todos", "Desaparecer sin explicación", "Con una nota"] },
        { prompt: "El mejor anime para empezar:", options: ["Naruto", "One Piece", "Death Note", "Attack on Titan"] },
        { prompt: "Lo más importante en una amistad:", options: ["Lealtad", "Humor", "Sinceridad", "Disponibilidad"] },
        { prompt: "El mejor momento del día:", options: ["Mañana temprano", "Después de comer", "Atardecer", "Noche"] },
        { prompt: "Si te toca la lotería, lo primero que haces:", options: ["Comprar casa", "Viajar", "Invertir", "Desaparecer una semana"] },
        { prompt: "El peor castigo para una fiesta:", options: ["Sin música", "Sin alcohol", "Sin móvil", "Tener que hablar con todos"] },
      ],

      /* --- JUEGO: Te Conozco --- */
      teconozco: [
        { q: "¿Qué prefiere {p1} para unas vacaciones ideales?", a: "Playa, fiesta y cero horarios", b: "Viaje cultural, ruta y desconexión" },
        { q: "Si {p1} encontrara una cartera con 500 € y sin DNI, ¿qué haría?", a: "Quedárselos sin mirar atrás", b: "Intentar buscar al dueño o entregarla" },
        { q: "¿Qué le da más rabia a {p1}?", a: "Que le dejen en visto", b: "Que lleguen 20 minutos tarde" },
        { q: "¿Cómo actúa {p1} cuando se enfada de verdad?", a: "Explota al momento y luego se le pasa", b: "Se calla y guarda rencor días" },
        { q: "Si {p1} tuviera 30.000 € ahora mismo, ¿qué haría primero?", a: "Comprarse un buen coche o capricho", b: "Ahorrarlo o invertirlo casi todo" },
        { q: "¿Qué plan prefiere {p1} un viernes noche?", a: "Salir de fiesta hasta que cierren", b: "Cena tranquila, risas y sofá/juegos" },
        { q: "¿Cómo es {p1} de copiloto en un viaje largo?", a: "Va poniendo música y charlando todo el rato", b: "Se queda dormido/a antes de salir del pueblo" },
        { q: "¿Qué elegiría {p1}?", a: "Saber la fecha en la que va a morir", b: "Saber cuánto dinero va a ganar en su vida" },
        { q: "¿Qué haría {p1} si se encontrara un móvil nuevo en un taxi?", a: "Quedárselo sin mirar atrás", b: "Buscar al dueño o entregarlo" },
        { q: "¿Qué prefiere {p1} en una boda?", a: "Bailar hasta el final", b: "Comer y irse pronto" },
        { q: "¿Cómo reacciona {p1} ante una crítica?", a: "Se lo toma a broma", b: "Se lo guarda y lo piensa" },
        { q: "¿Qué elegiría {p1} para vivir?", a: "Centro de la ciudad", b: "Casa en el campo" },
        { q: "¿Qué hace {p1} cuando no puede dormir?", a: "Mirar el móvil", b: "Ponerse una serie" },
        { q: "¿Qué prefiere {p1} para su cumpleaños?", a: "Fiesta sorpresa", b: "Plan tranquilo con pocos" },
        { q: "¿Cómo es {p1} cuando viaja?", a: "Planifica todo", b: "Improvisa sobre la marcha" },
        { q: "¿Qué le importa más a {p1} en una pareja?", a: "El humor", b: "La estabilidad" },
        { q: "¿Qué haría {p1} con un día libre inesperado?", a: "Dormir hasta tarde", b: "Salir a hacer algo" },
        { q: "¿Qué prefiere {p1} en una hamburguesa?", a: "Con queso", b: "Sin queso" },
      ],

      /* --- JUEGO: Trivia Rápida (correct = índice de la opción buena) --- */
      trivia: [
        { q: "¿Qué país tiene más islas en el mundo?", options: ["Indonesia", "Suecia", "Filipinas", "Noruega"], correct: 1 },
        { q: "¿Cuál fue el primer vídeo subido a YouTube en 2005?", options: ["Evolution of Dance", "Charlie bit my finger", "Me at the zoo", "Nyan Cat"], correct: 2 },
        { q: "¿En qué año se lanzó el primer iPhone?", options: ["2006", "2007", "2008", "2005"], correct: 1 },
        { q: "¿Cuántos corazones tiene un pulpo?", options: ["1", "2", "3", "4"], correct: 2 },
        { q: "¿Qué película de anime es la más taquillera de la historia en Japón?", options: ["El viaje de Chihiro", "Your Name", "Demon Slayer: Tren Infinito", "One Piece Film: Red"], correct: 2 },
        { q: "¿Cómo se llama el titán principal que hereda Eren Jaeger en Attack on Titan?", options: ["Titán Acorazado", "Titán de Ataque", "Titán Bestia", "Titán Colosal"], correct: 1 },
        { q: "En Jujutsu Kaisen, ¿cómo se llama la expansión de dominio de Satoru Gojo?", options: ["Santuario Malévolo", "Vacío Inconmensurable", "Jardín de las Sombras", "Ataúd de la Montaña"], correct: 1 },
        { q: "¿Cuál es el nombre real de L en Death Note?", options: ["Light Yagami", "Nate River", "L Lawliet", "Mihael Keehl"], correct: 2 },
        { q: "En Dragon Ball Z, ¿quién derrota definitivamente a Célula (Cell)?", options: ["Goku", "Vegeta", "Gohan", "Trunks"], correct: 2 },
        { q: "¿Qué significa exactamente la sigla «ITV» en España?", options: ["Inspección Técnica de Vehículos", "Índice Total de Velocidad", "Impuesto de Tráfico Vial", "Ingeniería Técnica Vehicular"], correct: 0 },
        { q: "¿Qué marca de coches tiene cuatro aros entrelazados en su logotipo?", options: ["BMW", "Lexus", "Audi", "Infiniti"], correct: 2 },
        { q: "¿En qué circuito se disputa habitualmente el GP de España de Fórmula 1?", options: ["Jarama", "Montmeló (Barcelona-Catalunya)", "Cheste", "Jerez"], correct: 1 },
        { q: "¿Qué fabricante japonés creó el mítico Skyline GT-R R34?", options: ["Toyota", "Honda", "Mazda", "Nissan"], correct: 3 },
        { q: "¿Cuántos puntos te quitan en España por sujetar el móvil con la mano conduciendo?", options: ["3 puntos", "4 puntos", "6 puntos", "2 puntos"], correct: 2 },
        { q: "¿Cuál es el videojuego más vendido de la historia?", options: ["GTA V", "Tetris", "Minecraft", "Wii Sports"], correct: 2 },
        { q: "¿Qué artista español protagonizó la BZRP Music Sessions #52 («Quédate»)?", options: ["Rels B", "Quevedo", "C. Tangana", "Saiko"], correct: 1 },
        { q: "¿De qué país es originaria la marca IKEA?", options: ["Dinamarca", "Noruega", "Suecia", "Finlandia"], correct: 2 },
        { q: "¿Qué planeta gira en sentido contrario a la mayoría del Sistema Solar?", options: ["Marte", "Venus", "Júpiter", "Saturno"], correct: 1 },
        { q: "¿Qué metal es el más caro por gramo en condiciones normales?", options: ["Oro", "Platino", "Rodio", "Paladio"], correct: 2 },
        { q: "¿Qué estudio de animación japonés creó «El viaje de Chihiro» y «Mi vecino Totoro»?", options: ["MAPPA", "Ufotable", "Studio Ghibli", "Madhouse"], correct: 2 },
        { q: "¿Cuál es el océano más grande del mundo?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], correct: 2 },
        { q: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?", options: ["9", "10", "11", "12"], correct: 2 },
        { q: "¿Qué país ganó el Mundial de Fútbol 2022?", options: ["Francia", "Argentina", "Brasil", "Croacia"], correct: 1 },
        { q: "¿Cómo se llama el capitán de los Sombrero de Paja?", options: ["Luffy", "Zoro", "Nami", "Sanji"], correct: 0 },
        { q: "¿Qué empresa desarrolló Mario?", options: ["Sega", "Nintendo", "Sony", "Capcom"], correct: 1 },
        { q: "¿Cuál es el metal más ligero?", options: ["Aluminio", "Litio", "Titanio", "Magnesio"], correct: 1 },
        { q: "¿Qué significa «GPU»?", options: ["Unidad de proceso gráfico", "Memoria de acceso aleatorio", "Fuente de alimentación", "Placa base"], correct: 0 },
        { q: "¿Qué país es famoso por el sushi?", options: ["China", "Japón", "Tailandia", "Corea del Sur"], correct: 1 },
        { q: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"], correct: 1 },
        { q: "¿Qué herramienta se usa para medir la presión de los neumáticos?", options: ["Manómetro", "Calibre", "Termómetro", "Dinamómetro"], correct: 0 },
      ],

      /* --- JUEGO: Dilemas Extremos --- */
      dilemas: [
        { a: "Que tus padres lean todos tus chats archivados", b: "Que publiquen tu galería entera en historias 24h" },
        { a: "No volver a probar el alcohol en 5 años", b: "Salir cada finde pero acabar vomitando siempre antes de las 3 AM" },
        { a: "Decir siempre en voz alta lo que piensas de cada persona", b: "No poder hablar ni escribir mensajes durante 1 año" },
        { a: "Cobrar 3.000 €/mes sin trabajar pero sin salir jamás de tu ciudad", b: "Viajar gratis por todo el mundo siempre con 0 € en el banco" },
        { a: "Perder todos tus recuerdos hasta hoy", b: "No poder crear ningún recuerdo nuevo desde mañana" },
        { a: "Tener el coche de tus sueños pero solo poder conducirlo a 50 km/h máximo", b: "Tener un coche destartalado pero gasolina y seguro gratis de por vida" },
        { a: "Vivir dentro del mundo de tu anime favorito siendo un personaje secundario", b: "Tener superpoderes en el mundo real pero que nadie pueda saberlo jamás" },
        { a: "Que tu pareja o mejor amigo/a tenga acceso 24/7 a tu ubicación y búsquedas", b: "No poder usar redes sociales ni WhatsApp durante 2 años" },
        { a: "Saber la fecha exacta en la que vas a morir", b: "Saber la causa exacta de cómo vas a morir" },
        { a: "Que todo el grupo vea tu historial de TikTok / YouTube ahora mismo", b: "Beberte un chupito mezclado con todas las bebidas de la mesa" },
        { a: "Tener wifi gratis para siempre pero a 1 Mbps", b: "No tener wifi nunca más pero datos ilimitados en el móvil" },
        { a: "Saber siempre cuando alguien te miente", b: "No poder mentir nunca tú" },
        { a: "Trabajar 4 días por semana ganando menos", b: "Trabajar 6 días ganando el doble" },
        { a: "Vivir sin música", b: "Vivir sin series ni películas" },
        { a: "Que tu ex se case con tu mejor amigo/a", b: "Que tu mejor amigo/a se mude al otro lado del mundo" },
        { a: "Comer solo pizza durante un año", b: "No volver a comer pizza en tu vida" },
        { a: "Tener un botón para borrar tu historial de WhatsApp", b: "Que tu historial se publique durante 24 horas" },
        { a: "Ser famoso por algo vergonzoso", b: "Ser invisible para siempre" },
        { a: "Tener siempre razón en las discusiones", b: "Que todo el mundo te quiera" },
        { a: "Poder viajar en el tiempo una vez", b: "Poder leer la mente una vez al día" },
      ],

      /* --- JUEGO: Yo Nunca Secreto --- */
      yonunca: [
        "Yo nunca he fingido estar más borracho/a de lo que estaba para tener excusa.",
        "Yo nunca he revisado el móvil de mi pareja o de un rollo sin su permiso.",
        "Yo nunca me he inventado una excusa médica o familiar grave para escaquearme de un plan.",
        "Yo nunca me he liado con dos personas distintas en la misma noche.",
        "Yo nunca he tenido una laguna mental de fiesta y me han tenido que contar qué hice.",
        "Yo nunca he colado o me he colado en una discoteca, reservado o evento sin pagar.",
        "Yo nunca he tenido ganas de liarme con alguien que está ahora mismo en esta sala.",
        "Yo nunca he calado el coche en mitad de una rotonda o semáforo con gente mirando.",
        "Yo nunca he superado el límite de velocidad por bastante solo por probar cuánto tiraba el coche.",
        "Yo nunca me he quedado despierto/a hasta las 6 de la mañana viendo anime o una serie.",
        "Yo nunca he buscado mi propio nombre en Google o redes sociales para ver qué salía.",
        "Yo nunca he fingido entender una conversación sobre coches, fútbol o anime para no quedar mal.",
        "Yo nunca he llorado viendo un anime, película o serie.",
        "Yo nunca he mandado un mensaje comprometedor al chat equivocado.",
        "Yo nunca he fingido una lesión para no hacer deporte.",
        "Yo nunca he enviado una captura de una conversación a la persona equivocada.",
        "Yo nunca he mentido sobre mi edad o mi trabajo en una cita.",
        "Yo nunca he cogido dinero de un familiar sin devolverlo.",
        "Yo nunca he stalkeado a alguien durante más de una hora.",
        "Yo nunca he dicho que estaba de camino sin haber salido de casa.",
        "Yo nunca he roto algo y culpado a otra persona.",
        "Yo nunca he fingido que me gustaba un regalo que odiaba.",
      ],

      /* --- JUEGO: Verdad o Trola --- */
      verdad: [
        "Cuenta la mayor liada que hayas hecho de fiesta sin que tu familia se enterara.",
        "Di quién de esta sala te caía mal al principio y por qué.",
        "Cuenta la cita o el lío más desastroso que hayas tenido nunca.",
        "Confiesa la mayor mentira que le hayas colado al grupo.",
        "Di cuál ha sido el momento más vergonzoso de tu vida en público.",
        "Confiesa qué es lo más caro que has roto o perdido sin decir nada.",
        "Cuenta el mayor susto que hayas tenido dentro de un coche.",
        "Confiesa qué serie, canción o gusto friki te da vergüenza admitir en público.",
        "Cuenta una anécdota de viaje o escapada que acabó completamente al revés de lo planeado.",
        "Di cuál es la peor excusa que has usado para dejar a alguien o cancelar una cita.",
        "Cuenta la mentira más grande que le hayas contado a tu madre.",
        "Confiesa una vez que hayas fingido no conocer a alguien.",
        "Di qué es lo más vergonzoso que has hecho por dinero.",
        "Cuenta la peor cita que hayas tenido y cómo terminó.",
        "Confiesa un secreto que te hayas llevado a la tumba hasta hoy.",
        "Di qué has hecho que nunca le contarías a tu pareja.",
        "Cuenta una vez que hayas roto una promesa importante.",
        "Confiesa algo que hayas robado aunque fuera pequeño.",
        "Di cuál ha sido tu mayor momento de envidia.",
        "Cuenta la vez que más miedo has pasado en tu vida.",
      ],
    },

    /* ========================================================================
     *  MAZO: 🎌 Anime & Friki
     *  (Solo define "quien"; el resto lo hereda del mazo GENERAL.)
     * ==================================================================== */
    "anime_friki": {
      label: "🎌 Anime & Friki",
      icon: "🎌",
      deckName: "🎌 Anime & Friki",

      /* --- JUEGO: ¿Quién de aquí...? --- */
      quien: [
        /* --- 🟢 CALENTAMIENTO (suave) --- */
        { cat: "suave", text: "¿Quién se ha visto una temporada entera de anime de 24 capítulos en un solo finde?" },
        { cat: "suave", text: "¿Quién se sabe más openings de anime de memoria que temas de clase o del trabajo?" },
        { cat: "suave", text: "¿Quién pondría a su mascota o hijo el nombre de un personaje de anime?" },
        /* --- 🟡 SALSEO / DELICADAS (delicada) --- */
        { cat: "delicada", text: "¿Quién ha tenido un crush ficticio con un personaje de anime y lo niega?" },
        { cat: "delicada", text: "¿Quién ha llorado más con la muerte de un personaje de ficción que con un problema real?" },
        /* --- 🟠 CRUELES (cruel) --- */
        { cat: "cruel", text: "¿Quién es más elitista con sus gustos y dice «el manga es mejor» aunque no se lo haya leído?" },
        { cat: "cruel", text: "¿Quién intenta ocultar su lado friki delante de gente nueva pero aguanta menos de 10 minutos?" },
        /* --- 🧠 PROFUNDO / DEBATE (profundo) --- */
        { cat: "profundo", text: "¿Qué personaje de anime o serie representa mejor la personalidad de {p1}?" },
        { cat: "profundo", text: "Si perdieras la memoria por completo mañana, ¿a quién de esta sala elegirías para que te contara quién eras, tus secretos y cómo es tu vida?" },
        { cat: "profundo", text: "Si tuvieras un problema muy grave a las 4 de la mañana, ¿a quién de aquí llamarías en primer lugar?" },
        { cat: "profundo", text: "¿Quién lleva por dentro mucha más presión o carga mental de la que demuestra?" },
        { cat: "profundo", text: "¿A quién de esta sala le confiarías un secreto que podría arruinarte la vida si se supiera?" },
      ],
    },

    /* ========================================================================
     *  MAZO: 🏎️ Coches & Motor
     *  (Solo define "quien"; el resto lo hereda del mazo GENERAL.)
     * ==================================================================== */
    "coches_motor": {
      label: "🏎️ Coches & Motor",
      icon: "🏎️",
      deckName: "🏎️ Coches & Motor",

      /* --- JUEGO: ¿Quién de aquí...? --- */
      quien: [
        /* --- 🟢 CALENTAMIENTO (suave) --- */
        { cat: "suave", text: "¿Quién conduce como si estuviera clasificando en Monza cuando solo va a por el pan?" },
        { cat: "suave", text: "¿Quién lleva meses con el testigo de fallo motor encendido diciendo «eso aguanta»?" },
        { cat: "suave", text: "¿Quién tarda más tiempo en aparcar en línea mientras todo el grupo mira desde fuera?" },
        /* --- 🟡 SALSEO / DELICADAS (delicada) --- */
        { cat: "delicada", text: "¿Quién se gastaría antes 2.000 € en unas llantas que en ropa o vacaciones?" },
        { cat: "delicada", text: "¿Quién quiere más a su coche que a la mitad de la gente de esta sala?" },
        /* --- 🟠 CRUELES (cruel) --- */
        { cat: "cruel", text: "¿Quién se cree piloto profesional pero cala el coche en las rotondas?" },
        { cat: "cruel", text: "¿Quién es el peor copiloto porque va frenando con el pie derecho desde su asiento?" },
        /* --- 🧠 PROFUNDO / DEBATE (profundo) --- */
        { cat: "profundo", text: "Si perdieras la memoria por completo mañana, ¿a quién de esta sala elegirías para que te contara quién eras, tus secretos y cómo es tu vida?" },
        { cat: "profundo", text: "Si tuvieras un problema muy grave a las 4 de la mañana, ¿a quién de aquí llamarías en primer lugar?" },
        { cat: "profundo", text: "¿Quién lleva por dentro mucha más presión o carga mental de la que demuestra?" },
        { cat: "profundo", text: "¿A quién de esta sala le confiarías un secreto que podría arruinarte la vida si se supiera?" },
      ],
    },

    /* ========================================================================
     *  MAZO: 🎓 FP / Uni
     *  (Solo define "quien"; el resto lo hereda del mazo GENERAL.)
     * ==================================================================== */
    "fp_uni": {
      label: "🎓 FP / Uni",
      icon: "🎓",
      deckName: "🎓 FP / Universidad",

      /* --- JUEGO: ¿Quién de aquí...? --- */
      quien: [
        /* --- 🟢 CALENTAMIENTO (suave) --- */
        { cat: "suave", text: "¿Quién aprobaría un examen final habiendo estudiado solo 20 minutos en el bus?" },
        { cat: "suave", text: "¿Quién tiene más apuntes robados de otros compañeros que propios?" },
        { cat: "suave", text: "¿Quién se duerme en primera fila mirando fijamente al profesor?" },
        /* --- 🟡 SALSEO / DELICADAS (delicada) --- */
        { cat: "delicada", text: "¿Quién ha tenido un lío secreto en clase y ha fingido que no pasaba nada?" },
        /* --- 🟠 CRUELES (cruel) --- */
        { cat: "cruel", text: "¿Quién no hace nada en los trabajos en grupo pero se lleva la misma nota?" },
        /* --- 🧠 PROFUNDO / DEBATE (profundo) --- */
        { cat: "profundo", text: "Si perdieras la memoria por completo mañana, ¿a quién de esta sala elegirías para que te contara quién eras, tus secretos y cómo es tu vida?" },
        { cat: "profundo", text: "Si tuvieras un problema muy grave a las 4 de la mañana, ¿a quién de aquí llamarías en primer lugar?" },
        { cat: "profundo", text: "¿Quién lleva por dentro mucha más presión o carga mental de la que demuestra?" },
        { cat: "profundo", text: "¿A quién de esta sala le confiarías un secreto que podría arruinarte la vida si se supiera?" },
      ],
    },

  },

  /* ==========================================================================
   *  CONTENIDO COMÚN A TODOS LOS MAZOS
   * ======================================================================== */
  shared: {

    /* --- Modo Beber: retos --- */
    dares: [
      "🗣️ Habla con acento de otra región o país hasta la próxima ronda.",
      "🎭 Imita a alguien de esta sala hasta que los demás adivinen quién es.",
      "😂 Cuenta un chiste malo; si nadie se ríe, tienes que contar otro.",
      "🤐 Prohibido decir «sí» o «no» hasta la siguiente ronda (si fallas, doble reto).",
      "📱 Deja que la persona a tu derecha mande un emoji a quien quiera en tu WhatsApp.",
      "👑 Habla de ti en tercera persona durante las próximas 2 rondas.",
      "🕺 Haz tu mejor paso de baile durante 10 segundos en el centro.",
    ],

    /* --- Avatares disponibles --- */
    avatars: [
      "🔥",
      "🍻",
      "😈",
      "🦊",
      "👽",
      "👑",
      "🏎️",
      "🎌",
      "⚡",
      "🎭",
      "🐍",
      "🚀",
    ],

    /* --- Eventos aleatorios de cada 4 rondas --- */
    events: [
      {
        "id": "double",
        "text": "⚡ EVENTO ALEATORIO: ¡Ronda Doble (x2 puntos / tragos)!"
      },
      {
        "id": "swap",
        "text": "🔄 EVENTO ALEATORIO: ¡Todos se cambian un sitio a la derecha!"
      },
      {
        "id": "immunity",
        "text": "🛡️ EVENTO ALEATORIO: ¡Inmunidad para el último del marcador!"
      }
    ],

    /* --- Frases que escriben los bots en "¿Quién lo escribió?" --- */
    escribioBots: [
      "Una vez dije que estaba llegando y todavía no había salido de la ducha.",
      "Me he reído en un momento súper serio sin poder parar.",
      "He fingido entender una referencia de anime para no quedar mal.",
      "He fingido que me sabía el nombre de alguien durante meses.",
      "Una vez me hice pasar por otra persona en una llamada.",
      "Me he comido algo que se cayó al suelo delante de todos.",
      "He dicho que no bebía y luego me bebí hasta el agua de los floreros.",
      "Me he quedado dormido en una quedada y nadie se dio cuenta.",
      "He buscado \"cómo fingir que te importa\" en Google.",
      "Una vez me inventé una mascota para no ir a un plan.",
    ]
  }
};
