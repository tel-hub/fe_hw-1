document.addEventListener('DOMContentLoaded', function () {
  const sources = [
    {
      alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
      alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
      alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    }
  ];

  const images = document.querySelectorAll('.container img');

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.setAttribute('src', sources[i].src);
    image.setAttribute('alt', sources[i].alt);
  }

  const list = document.querySelectorAll('.list li');

  for (let i = 0; i < list.length; i++) {
    const listElement = list[i];

    listElement.innerText = 'Item ' + (i + 1);
  }

});
