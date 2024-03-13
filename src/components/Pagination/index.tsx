import { MouseEventHandler, useState } from "react";
import useCountries from "../../hooks/useCountries";
import { Pages } from "../../types/types";

interface IPaginationProps {}

const Pagination: React.FC<IPaginationProps> = (): JSX.Element => {
  const [pages, setPages] = useState<Pages[]>([
    {
      number: 1,
      selected: true,
    },
    {
      number: 2,
      selected: false,
    },
    {
      number: 3,
      selected: false,
    },
    {
      number: 4,
      selected: false,
    },
    {
      number: 5,
      selected: false,
    },
    {
      number: 6,
      selected: false,
    },
    {
      number: 7,
      selected: false,
    },
    {
      number: 8,
      selected: false,
    },
    {
      number: 9,
      selected: false,
    },
    {
      number: 10,
      selected: false,
    },
    {
      number: 11,
      selected: false,
    },
    {
      number: 12,
      selected: false,
    },
    {
      number: 13,
      selected: false,
    },
  ]);
  const { getCountry } = useCountries();

  const handleChangePage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const value = parseInt(target.textContent || "1");
    const updatedPages = pages.map((page) => {
      if (page.number === value) {
        page.selected = true;
        return page;
      } else {
        page.selected = false;
        return page;
      }
    });
    getCountry(value);
    setPages(updatedPages);
    target.className += " btn-active dark:bg-slate-700";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex justify-center items-center m-auto">
      <div className="join">
        {pages.map((page) => {
          if (page.selected) {
            return (
              <button
                key={page.number}
                onClick={handleChangePage}
                className="join-item btn btn-lg dark:text-dark-text dark:border-dark-bg btn-active dark:bg-slate-700"
              >
                {page.number}
              </button>
            );
          } else {
            return (
              <button
                key={page.number}
                onClick={handleChangePage}
                className="join-item btn btn-lg dark:bg-dark-elements dark:text-dark-text dark:border-dark-bg"
              >
                {page.number}
              </button>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Pagination;
