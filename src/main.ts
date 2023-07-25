import './style.scss'
import claimType from '/claim.svg?raw'

window.addEventListener('hashchange', (ev: HashChangeEvent) => {
    const id = ev.newURL.split('#')[1];
    if (id !== undefined) {
        const activeLink = document.querySelector('.main-nav a.active');
        const link = document.querySelector(`.main-nav a[href="#${id}"]`);

        activeLink?.classList.remove('active');
        link?.classList.add('active');
    }
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header class="page-header">
        <nav class="main-nav">
            <a href="#about">Über</a>
            <a href="#player">Reinhören</a>
            <a href="#contact">Kontakt</a>
        </nav>
    </header>
    <section id="intro">
        <img src="./src/assets/header.webp" alt="BluesToo Bandbild" id="group-image" class="full-width">
        ${claimType}
    </section>
    <section id="about">
        <article class="section-content">
            <h2>Über uns</h2>
            <p>Here goes the about text!</p>
        </article>
    </section>
    <section id="player">
        <article class="section-content">
            <h2>Zum Reinhören</h2>
            <iframe width="100%" height="480" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/214456951&color=%234c7484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/blues-too" title="Blues Too" target="_blank" style="color: #cccccc; text-decoration: none;">Blues Too</a> · <a href="https://soundcloud.com/blues-too/sets/demo-snippets" title="Demo Snippets" target="_blank" style="color: #cccccc; text-decoration: none;">Demo Snippets</a></div>
        </article>
    </section>
    <section id="contact">
        <article class="section-content">
            <h2>Kontakt & Booking</h2>
            <p>
                Peter-Albert Schott<br>
                @: peter@bluestoo.de<br>
                M: +49 (0) 151 55885969
            </p>
        </article>
        <img src="./src/assets/contact.webp" class="full-width" />
    </section>
`
