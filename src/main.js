// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import imgUrl from '/img/xmark.svg';
const searchFormEl = document.querySelector('.js-search-form');
// q=
// const searchParams = new URLSearchParams({
//     key: 16196075-bdcf118405fead11ea5570a4c,
//     q:,
//     image_type: photo,
//     orientation: horizontal,
// safesearch: true,
// });
// <p>Loading images, please wait...</p>
//  iziToast.error({
//         message: "Sorry, there are no images matching your search query. Please try again!",
//         color: '#EF4040',
//         position: 'topRight',
//         iconUrl: imgUrl,
//         iconColor: 'white',
//         messageColor: 'white',
//         timeout: 4000,
//         titleColor: 'white',
//         progressBar: 'false',
//       });
const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchingWords = searchFormEl.nextElementSibling.picture_query.value;
  console.dir(searchingWords);
};

searchFormEl.addEventListener('submit', onSearchFormSubmit());
// fetch('https://pixabay.com/api/')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.status);
//         }
//         return response.json;
//     })
//     .then((users) => {
//         const markup = users.map((user) => {
//             return <li></li>;
//         })
//             .join(" ");
//         userList.insertAdjasentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error);
//     );

// });
