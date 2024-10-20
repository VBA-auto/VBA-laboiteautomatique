const handleSearch = (term) => {
  const searchTermLower = term.trim().toLowerCase(); // Trim any extra spaces
  const searchTerms = searchTermLower.split(" ");

  // Filter by model and type
  const filtered = searchData.filter((item) => {
    const { model, types } = item;

    // Combine model and types data into a searchable string
    const combinedData = [
      model.toLowerCase(), // Full model name
      ...Object.keys(types).map((type) => type.toLowerCase()), // diesel, essence, etc.
      ...Object.values(types).map((typeData) =>
        [
          typeData.title.toLowerCase(),
          typeData.description.toLowerCase(),
          typeData.compatibility.toLowerCase(),
        ].join(" ")
      ),
    ].join(" ");

    // Check if every term in the search input is included in the combined data (multi-word search)
    return searchTerms.every((term) => combinedData.includes(term));
  });

  // Search by ref codes
  const refResults = searchRefData.filter((item) =>
    searchTerms.some((term) => item.ref.toLowerCase().includes(term))
  );

  // Process the filtered results from the model/type search
  const results = filtered.flatMap((item) => {
    const typeFiltered = Object.keys(item.types).filter((type) =>
      searchTerms.some((term) => type.toLowerCase().includes(term))
    );

    // If no specific type is requested, return all types for the matched model
    if (typeFiltered.length === 0) {
      return Object.keys(item.types).map((type) => ({
        ...item.types[type],
        model: item.model,
        type: type,
      }));
    }

    // Return only matched types
    return typeFiltered.map((type) => ({
      ...item.types[type],
      model: item.model,
      type: type,
    }));
  });

  // Combine model/type results with reference code results
  const combinedResults = [...results, ...refResults];

  setSearchResults(combinedResults);
  setIsSearching(false);
};

// const handleSearch = (term) => {
//   const searchTermLower = term.trim().toLowerCase();
//   const isNumericSearch = /^\d+$/.test(searchTermLower);
//   if (isNumericSearch) {
//     const refResults = searchRefData.filter((item) =>
//       item.ref.toLowerCase().includes(searchTermLower)
//     );
//     setSearchResults(refResults);
//   } else {
//     const searchTerms = searchTermLower.split(" ");
//     const filtered = searchData.filter((item) => {
//       const { model, types } = item;
//       const combinedData = [
//         model.toLowerCase(),
//         ...Object.keys(types).map((type) => type.toLowerCase()),
//         ...Object.values(types).map((typeData) =>
//           [
//             typeData.title.toLowerCase(),
//             typeData.description.toLowerCase(),
//             typeData.compatibility.toLowerCase(),
//           ].join(" ")
//         ),
//       ].join(" ");

//       return searchTerms.every((term) => combinedData.includes(term));
//     });

//     const results = filtered.flatMap((item) => {
//       const typeFiltered = Object.keys(item.types).filter((type) =>
//         searchTerms.some((term) => type.toLowerCase().includes(term))
//       );

//       if (typeFiltered.length === 0) {
//         return Object.keys(item.types).map((type) => ({
//           ...item.types[type],
//           model: item.model,
//           type: type,
//         }));
//       }

//       return typeFiltered.map((type) => ({
//         ...item.types[type],
//         model: item.model,
//         type: type,
//       }));
//     });

//     setSearchResults(results);
//   }

//   setIsSearching(false);
// };
