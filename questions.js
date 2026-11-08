/*
 * ============================================================
 *  JEOPARDY! — QUESTIONS & ANSWERS (editable)
 * ============================================================
 *  Edit this file in any text editor (TextEdit, Notepad, VS Code).
 *  Save it and refresh the game page — no rebuild needed.
 *
 *  Rules the game checks on load:
 *   - exactly 4 text categories (the 5th column is SONGS & MUSIC, see music.js)
 *   - exactly 8 questions per category, worth 100 to 800
 *  Keep the quotes and commas exactly as they are. If something is wrong
 *  the game shows an error screen telling you what to fix.
 */
window.JEOPARDY_QUESTIONS = {
  categories: [
    {
      name: "HISTORY",
      questions: [
        { points: 100, question: "This ancient civilization built the Great Pyramids of Giza and the Sphinx.", answer: "Ancient Egypt (the Egyptians)" },
        { points: 200, question: "This Roman leader was assassinated in the Senate on the Ides of March, 44 BC.", answer: "Julius Caesar" },
        { points: 300, question: "In this year, the Berlin Wall fell, opening the border between East and West Berlin.", answer: "1989" },
        { points: 400, question: "In 1492, this explorer sailed west across the Atlantic Ocean from Spain and reached the Americas.", answer: "Christopher Columbus" },
        { points: 500, question: "In 1453, the great city of Constantinople was captured, ending the Byzantine Empire. This empire conquered it.", answer: "The Ottoman Empire (the Ottoman Turks)" },
        { points: 600, question: "In 1961, this Soviet cosmonaut became the first human to travel into space.", answer: "Yuri Gagarin" },
        { points: 700, question: "This French military leader crowned himself Emperor in 1804 and was finally defeated at the Battle of Waterloo in 1815.", answer: "Napoleon Bonaparte" },
        { points: 800, question: "In 1215, English barons forced King John to sign this famous document that limited the power of the king.", answer: "The Magna Carta" }
      ]
    },
    {
      name: "GEOGRAPHY",
      questions: [
        { points: 100, question: "This is the largest and deepest ocean on Earth.", answer: "The Pacific Ocean" },
        { points: 200, question: "This country's flag is a simple red circle on a white background.", answer: "Japan" },
        { points: 300, question: "Not Sydney, not Melbourne — this city is the capital of Australia.", answer: "Canberra" },
        { points: 400, question: "Completely surrounded by the city of Rome, this is the smallest country in the world by area.", answer: "Vatican City" },
        { points: 500, question: "Located in Siberia, this is the deepest lake in the world and holds about 20% of Earth's unfrozen fresh surface water.", answer: "Lake Baikal" },
        { points: 600, question: "This is the largest hot desert in the world, covering most of North Africa.", answer: "The Sahara" },
        { points: 700, question: "This river in South America carries more water than any other river on Earth.", answer: "The Amazon" },
        { points: 800, question: "Mount Kilimanjaro, the highest mountain in Africa, is located in this country.", answer: "Tanzania" }
      ]
    },
    {
      name: "CINEMA & POP CULTURE",
      questions: [
        { points: 100, question: "In Disney's \"The Lion King\", this is the name of Simba's father.", answer: "Mufasa" },
        { points: 200, question: "In the Marvel movies, this is the name of Thor's magical hammer.", answer: "Mjölnir (Mjolnir)" },
        { points: 300, question: "This director made \"Jaws\", \"E.T. the Extra-Terrestrial\" and \"Jurassic Park\".", answer: "Steven Spielberg" },
        { points: 400, question: "In 2020, this South Korean film became the first non-English-language movie to win the Oscar for Best Picture.", answer: "Parasite" },
        { points: 500, question: "Co-founded by Hayao Miyazaki, this Japanese animation studio created \"Spirited Away\" and \"My Neighbor Totoro\".", answer: "Studio Ghibli" },
        { points: 600, question: "In \"Toy Story\", this space ranger's catchphrase is \"To infinity and beyond!\"", answer: "Buzz Lightyear" },
        { points: 700, question: "This 2009 James Cameron film about the blue Na'vi people of the moon Pandora is the highest-grossing film of all time.", answer: "Avatar" },
        { points: 800, question: "This actor played Captain Jack Sparrow in the \"Pirates of the Caribbean\" films.", answer: "Johnny Depp" }
      ]
    },
    {
      name: "BOOKS & AUTHORS",
      questions: [
        { points: 100, question: "This British author wrote the Harry Potter books about a boy wizard who goes to Hogwarts.", answer: "J.K. Rowling" },
        { points: 200, question: "This English playwright wrote \"Romeo and Juliet\" and \"Hamlet\".", answer: "William Shakespeare" },
        { points: 300, question: "This Russian writer wrote the huge novels \"War and Peace\" and \"Anna Karenina\".", answer: "Leo Tolstoy" },
        { points: 400, question: "This British author created the famous detective Sherlock Holmes and his friend Dr. Watson.", answer: "Arthur Conan Doyle" },
        { points: 500, question: "This French pilot and writer wrote \"The Little Prince\", about a boy who lives on a tiny asteroid.", answer: "Antoine de Saint-Exupéry" },
        { points: 600, question: "This English author wrote \"The Hobbit\" and \"The Lord of the Rings\".", answer: "J.R.R. Tolkien" },
        { points: 700, question: "This Russian author wrote \"Crime and Punishment\", about a student named Raskolnikov.", answer: "Fyodor Dostoevsky" },
        { points: 800, question: "This English author wrote the novel \"1984\", in which Big Brother is always watching.", answer: "George Orwell" }
      ]
    }
  ],

  // ---------------- FINAL JEOPARDY ----------------
  finalJeopardy: {
    category: "SCIENCE & DISCOVERY",
    question: "In 1928, this Scottish scientist noticed mould killing bacteria in a dish and discovered penicillin, the world's first true antibiotic.",
    answer: "Alexander Fleming"
  }
};
