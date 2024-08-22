const routesman = [
  {
    id: "man1",
    imgman: '<img src="/image/гид/summer-1024x1024.jpg" class="imgc2"/>',
    name: "Ivanov Ivan Petrovich",
    age: "35 years old",
    experience: "10 years of work experience",
    Det: "Ivanov Ivan Petrovich has a higher education in psychology and is a certified psychotherapist. He specializes in cognitive-behavioral therapy and has significant experience working in clinical settings. Ivanov regularly participates in international conferences and has several published scientific articles. He also works with children and adolescents, helping them cope with various psychological challenges. Ivanov is proficient in English and German, allowing him to work with foreign patients. He actively participates in professional communities and continuously improves his skills. Ivanov is also engaged in research aimed at improving psychotherapy methods.",
  },
  {
    id: "man2",
    imgman:
      '<img src="/image/гид/zimoj-studenty-edut-otdyhat-na-bajkal-a-pensionery-po-zolotomu-kolcu-456c285-1024x1024.jpg" class="imgc2"/>',
    name: "Smirnova Anna Sergeevna",
    age: "28 years old",
    experience: "5 years of work experience",
    Det: "Smirnova Anna Sergeevna has a higher education in psychology and specializes in family therapy. She has gained extensive experience in working with crisis situations and successfully helps families overcome difficulties. Anna actively participates in volunteer projects where she provides psychological support to those in need. In addition to her primary education, she has completed courses in child psychology, allowing her to work with children of various ages. Smirnova regularly attends professional seminars and training sessions to enhance her qualifications. She also has experience in conducting group therapies and seminars for parents. Anna strives for continuous professional growth and actively engages in self-education.",
  },
  {
    id: "man3",
    imgman:
      '<img src="/image/гид/skier-1024x1024-wallpaper-9912.jpg" class="imgc2"/>',
    name: "Ivanov Dmitry Vladimirovich",
    age: "42 years old",
    experience: "15 years of work experience",
    Det: "Ivanov Dmitry Vladimirovich is an experienced psychotherapist with 15 years of work experience. He has a higher education in psychology and specializes in cognitive-behavioral therapy. Dmitry has accumulated extensive experience working with patients suffering from depression, anxiety disorders, and post-traumatic stress disorder. He also works with couples, helping them improve mutual understanding and resolve conflicts. Ivanov actively participates in professional conferences and has numerous publications in scientific journals. He also teaches at a university and trains new specialists in psychotherapy. Dmitry is proficient in English and works with international patients. He constantly improves his skills and methods to provide top-level assistance.",
  },
  {
    id: "man4",
    imgman:
      '<img src="/image/гид/fc412591834e638437ca8f86baa28555.jpg" class="imgc2"/>',
    name: "Vasilyeva Elena Mikhailovna",
    age: "33 years old",
    experience: "7 years of work experience",
    Det: "Vasilyeva Elena Mikhailovna is a qualified psychologist with 7 years of work experience. She has a higher education in psychology and specializes in working with children and adolescents. Elena has accumulated significant experience in conducting individual and group therapy sessions. She actively participates in various educational projects and conducts training sessions for parents and educators. Vasilyeva is also engaged in research activities and has several publications in scientific journals. She is proficient in English and participates in international conferences. Elena constantly improves her skills and methods to provide the most effective assistance to her patients. She also actively collaborates with colleagues from other fields of psychology and medicine for a comprehensive approach to treatment.",
  },
  {
    id: "man5",
    imgman:
      '<img src="/image/гид/Dombart.ru_58c16f8f7c2f4.jpg" class="imgc2"/>',
    name: "Kuznetsov Mikhail Anatolyevich",
    age: "40 years old",
    experience: "12 years of work experience",
    Det: "Kuznetsov Mikhail Anatolyevich is an experienced psychotherapist with 12 years of work experience. He has a higher education in psychology and specializes in working with patients suffering from depression and anxiety disorders. Mikhail has accumulated extensive experience in conducting both individual and group therapy sessions. He actively participates in professional conferences and has numerous publications in scientific journals. Kuznetsov also teaches at a university and trains new specialists in psychotherapy. He is proficient in English and works with international patients. Mikhail constantly improves his skills and methods to provide top-level assistance. He also actively collaborates with colleagues from other fields of psychology and medicine for a comprehensive approach to treatment.",
  },
  {
    id: "man6",
    imgman:
      '<img src="/image/гид/square_1024_ae494c01a5a99a75fdd3fa78493633cd.jpg" class="imgc2"/>',
    name: "Sokolova Olga Nikolaevna",
    age: "37 years old",
    experience: "8 years of work experience",
    Det: "Sokolova Olga Nikolaevna is a qualified psychologist with 8 years of work experience. She has a higher education in psychology and specializes in working with children and adolescents. Olga has accumulated significant experience in conducting individual and group therapy sessions. She actively participates in various educational projects and conducts training sessions for parents and educators. Sokolova is also engaged in research activities and has several publications in scientific journals. She is proficient in English and participates in international conferences. Olga constantly improves her skills and methods to provide the most effective assistance to her patients. She also actively collaborates with colleagues from other fields of psychology and medicine for a comprehensive approach to treatment.",
  },
];

function displayManResultsById(manId) {
  const resultsContainer = document.getElementById("searchResultsMan");

  const man = routesman.find((man) => man.id === manId);

  if (man) {
    const manDetails = document.createElement("div");
    manDetails.classList.add("overlay");
    manDetails.innerHTML = `
                <div class="card-man">
                    <div class="photo-man">${man.imgman}</div>
                    <div class="info-man">
                        <div class="close-man">&times;</div>
                        <h1>${man.name}</h1>
                        <p>${man.age}</p>
                        <p>${man.experience}</p>
                        <div class="details-man">${man.Det}</div>
                    </div>
                </div>
            `;

    resultsContainer.appendChild(manDetails);

    // Добавить событие для кнопки закрытия
    manDetails
      .querySelector(".close-man")
      .addEventListener("click", function () {
        resultsContainer.removeChild(manDetails);
      });
  } else {
    const notFoundMessage = document.createElement("p");
    notFoundMessage.textContent = "Маршрут не найден.";
    resultsContainer.appendChild(notFoundMessage);
  }
}

document.getElementById("man1Button").addEventListener("click", function () {
  displayManResultsById("man1");
});

document.getElementById("man2Button").addEventListener("click", function () {
  displayManResultsById("man2");
});

document.getElementById("man3Button").addEventListener("click", function () {
  displayManResultsById("man3");
});

document.getElementById("man4Button").addEventListener("click", function () {
  displayManResultsById("man4");
});
document.getElementById("man5Button").addEventListener("click", function () {
  displayManResultsById("man5");
});
document.getElementById("man6Button").addEventListener("click", function () {
  displayManResultsById("man6");
});
