// =========================
// ELEMENT
// =========================


const music =
document.querySelector("#music");

console.log("JS berhasil dimuat");

const memory =
document.querySelector(".memory");


const ribbon =
document.querySelector(".ribbon");


const container =
document.querySelector(".container");


const paper =
document.querySelector(".paper");


const paperTitle =
document.querySelector(
    ".letter-header h1"
);


const paperContent =
document.querySelector(
    ".letter-content"
);



// =========================
// DATA SURAT
// =========================


const letterData = {


    title: "Please Read This",


    content: `

        <p>
            Buat mass,
        </p>


        <p>
        MWEHEHEHEHEHE.....
        </p>
        <p>
        Semangat terus ya kerjanya! Jangan lupa jaga kesehatan,
        jangan terlalu capek, dan jangan lupa istirahat juga.
        Semoga kerjaannya lancar, rezekinya makin banyak, makin sukses, 
        dan apa yang mas usahain bisa tercapai.
        </p>
        <p>
        Pokoknya semangat terus ya, mas. 
        Aku sebagai adik yang baik tentunya selalu mendukung dan 
        mendoakan yang terbaik buat mas.
        </p>
        <p>
        Oh iya, ngomong-ngomong soal rezeki yang makin banyak... 
        kalau ada lebih, boleh ditransfer ke adik tercinta ini ya. 
        Biar rezekinya makin berkah 😁
        </p>
        <p>
        semoga apapun  yang lagi mas perjuangin sekarang, semuanya
        dimudahkan. jangan lupa istirahat yahh, dan jangan terlalu keras
        sama diri sediriii........ okaaaayyyy???
        </p>
        <p>
        selalu jaga diri yah, dan tetap menjadi orang yang baikkk.
        JANGANN LUPAAA UNTUK SELALU BAHAGIAAAAAA......
        BAAYYY!!!!
        </p>

    `

};




// =========================
// DATA FOTO BUNGA
// =========================


const flowers = [

    "foto/p.png",

    "foto/q.png",

    "foto/s.png",

    "foto/t.png",

    "foto/u.png",

    "foto/v.png",

    "foto/w.png",

    "foto/x.png",

    "foto/y.png",

    "foto/z.png",

];


let flowerTimer;





// =========================
// MASUKKAN ISI SURAT
// =========================


paperTitle.textContent =
letterData.title;



paperContent.innerHTML =
letterData.content;





// =========================
// BUKA AMPLOP
// =========================


ribbon.addEventListener(
    "click",
    () => {


        // sembunyikan pita

        ribbon.style.display =
        "none";



        // aktifkan animasi buka

        container.classList.add(
            "open"
        );


    }
);





// =========================
// KLIK KERTAS
// =========================


paper.addEventListener(
    "click",
    () => {

paper.style.pointerEvents = "none";
        // kertas fullscreen

        container.classList.add(
            "show-paper"
        );



        // musik mulai

        // =========================
        // MUSIC
        // =========================

        music.currentTime = 0;

        music.play()
        .then(() => {
            console.log("musik mulai");
        })
        .catch(error => {
            console.log("musik gagal:", error);
        });



        // tunggu animasi kertas

        setTimeout(
            () => {


                showFlowers();


            },
            1000
        );



        // bunga hilang setelah 7 detik

        setTimeout(
            () => {


                hideFlowers();


            },
            8000
        );


    }
);






// =========================
// TAMPILKAN BUNGA
// =========================


function showFlowers(){


    memory.classList.add(
        "show"
    );



    flowerTimer =
    setInterval(
        () => {



            const img =
            document.createElement(
                "img"
            );



            // pilih bunga random

            img.src =
            flowers[
                Math.floor(
                    Math.random()
                    *
                    flowers.length
                )
            ];



            // ukuran random

            const size =
            Math.floor(
                Math.random()
                *
                250
            ) + 80;



            img.style.width =
            size + "px";



            // posisi random layar

            img.style.left =
            Math.random()
            *
            90
            +
            "vw";



            img.style.top =
            Math.random()
            *
            90
            +
            "vh";



            // rotasi random

            img.style.rotate =
            Math.random()
            *
            360
            +
            "deg";



            memory.appendChild(
                img
            );



            // hapus foto lama

            setTimeout(
                () => {

                    img.remove();

                },
                4000
            );



        },
        300
    );

}






// =========================
// HILANGKAN BUNGA
// =========================


function hideFlowers(){


    clearInterval(
        flowerTimer
    );



    memory.classList.remove(
        "show"
    );



    setTimeout(
        () => {

            memory.innerHTML =
            "";

        },
        800
    );

}
