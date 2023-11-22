document.addEventListener("DOMContentLoaded", function () {
    // Selecione os elementos dos tickets
    const ticket2 = document.querySelector(".tickets img:nth-child(1)");
    const ticket3 = document.querySelector(".tickets img:nth-child(3)");
    const ticketsSection = document.querySelector(".tickets");

    // Adicione um evento de passagem do mouse à seção .tickets
    ticketsSection.addEventListener("mouseenter", function () {
        // Ajuste a posição do ticket2 para a esquerda com uma transição suave
        ticket2.style.transition = "transform 0.5s ease";
        ticket2.style.transform = "rotate(-20deg) translateX(-100%)";

        // Faça o mesmo para o ticket3
        ticket3.style.transition = "transform 0.5s ease";
        ticket3.style.transform = "rotate(20deg) translateX(100%)";
    });

    ticketsSection.addEventListener("mouseleave", function () {
        // Retorne à posição original quando o mouse sair da seção .tickets
        ticket2.style.transition = "transform 0.5s ease";
        ticket2.style.transform = "rotate(-20deg) translateX(-80%)";

        // Faça o mesmo para o ticket3
        ticket3.style.transition = "transform 0.5s ease";
        ticket3.style.transform = "rotate(20deg) translateX(80%)";
    });
});

