import { useBrands } from "./useBrands";
import { useSearchParams } from "react-router";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"; // Assuming they have lucide-react

const Brands = () => {
  const { brands, pagination, isLoading, error, hasBrands, isPlaceholderData } =
    useBrands();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (column: string) => {
    const currentSort = searchParams.get("sort_by");
    const currentDir = searchParams.get("sort_dir");
    let newDir = "ASC";
    if (currentSort === column && currentDir === "ASC") {
      newDir = "DESC";
    }
    searchParams.set("sort_by", column);
    searchParams.set("sort_dir", newDir);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handlePageChange = (newPage: number) => {
    searchParams.set("page", newPage.toString());
    setSearchParams(searchParams);
  };

  const getSortIcon = (column: string) => {
    const currentSort = searchParams.get("sort_by");
    const currentDir = searchParams.get("sort_dir");
    if (currentSort !== column) return null;
    return currentDir === "ASC" ? (
      <ArrowUpIcon className="w-4 h-4 inline ml-1" />
    ) : (
      <ArrowDownIcon className="w-4 h-4 inline ml-1" />
    );
  };

  if (isLoading && !isPlaceholderData) {
    return (
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10 text-3xl font-bold">
          Brands
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
          <div className="w-16 h-16 border-4 border-muted/30 border-t-primary rounded-full animate-spin mb-6 shadow-sm"></div>
          <p className="text-xl text-foreground/80 font-bold tracking-widest animate-pulse">
            LOADING BRANDS...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10 text-3xl font-bold">
          Brands
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
          <p className="text-xl text-red-500">Error loading brands</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-5 pt-25">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-end  pb-5 w-full">
          <h3 className="text-5xl font-bold w-fit border-b-4 border-secondary pb-5 text-center">
            Marcas que manejamos
          </h3>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md w-full mb-5 placeholder:text-secondary border-secondary"
            onChange={(e) => {
              if (e.target.value) {
                searchParams.set("search", e.target.value);
              } else {
                searchParams.delete("search");
              }
              searchParams.set("page", "1");
              setSearchParams(searchParams);
            }}
            defaultValue={searchParams.get("search") || ""}
          />
        </div>
        {!hasBrands && !isPlaceholderData ? (
          <div className="text-xl text-center py-20">No brands found</div>
        ) : (
          <div
            className={`transition-opacity duration-300 ${isPlaceholderData ? "opacity-50" : "opacity-100"}`}
          >
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-muted/20">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/10 text-foreground/70 uppercase text-sm leading-normal border-b border-muted/20">
                    <th
                      className="py-4 px-6 cursor-pointer hover:bg-muted/20 transition-colors"
                      onClick={() => handleSort("id")}
                    >
                      ID {getSortIcon("id")}
                    </th>
                    <th
                      className="py-4 px-6 cursor-pointer hover:bg-muted/20 transition-colors"
                      onClick={() => handleSort("name")}
                    >
                      Nombre {getSortIcon("name")}
                    </th>
                    <th
                      className="py-4 px-6 cursor-pointer hover:bg-muted/20 transition-colors"
                      onClick={() => handleSort("country")}
                    >
                      Pais de origen {getSortIcon("country")}
                    </th>
                    <th
                      className="py-4 px-6 cursor-pointer hover:bg-muted/20 transition-colors"
                      onClick={() => handleSort("founded_year")}
                    >
                      Fecha de fundación {getSortIcon("founded_year")}
                    </th>
                    <th className="py-4 px-6">Slogan</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/80 text-sm font-light">
                  {brands.map(
                    ({
                      id,
                      name,
                      slogan,
                      country,
                      founded_year,
                    }) => (
                      <tr
                        key={id}
                        className="border-b border-muted/10 hover:bg-muted/5 transition-colors"
                      >
                        <td className="py-4 px-6 font-light">{id}</td>
                        <td className="py-4 px-6 font-bold uppercase">
                          {name}
                        </td>
                        <td className="py-4 px-6 ">{country}</td>
                        <td className="py-4 px-6">{founded_year}</td>
                        <td
                          className="py-4 px-6 max-w-xs truncate"
                          title={slogan}
                        >
                          {slogan}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {pagination && pagination.total_pages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-4">
                <button
                  disabled={pagination.current_page <= 1}
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-muted/10"
                >
                  Previous
                </button>
                <span className="font-semibold">
                  Page {pagination.current_page} of {pagination.total_pages}
                </span>
                <button
                  disabled={pagination.current_page >= pagination.total_pages}
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-muted/10"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
