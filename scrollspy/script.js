window.onload = () => {
  const sections = document.getElementsByTagName("section");
  // const label = document.getElementById("section-name");

  const observer = new IntersectionObserver(
      (entries) => {
          for (const entry of entries)
              if (entry.isIntersecting) {

                const currentActive = document.querySelector('.sidebar .active');
                currentActive?.classList.remove('active');
                // entry.target.classList.add('active');

                document.querySelector(`a[href$="${entry.target.id}"]`)?.classList.add('active');


              }

      },
      {
          //Once the element reaches the top 30% of the view port
          rootMargin: "-30% 0px -70% 0px"
      }
  );
  for (let i = 0; i < sections.length; i++) observer.observe(sections[i]);
};

