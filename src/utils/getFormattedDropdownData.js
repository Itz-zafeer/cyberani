const getFormattedDropdownData = async ({
  programs,
  degrees,
  departments,
  selectedDegree,
  selectedDepartment,
  selectedProgram,
  fromDegree,
  academicPage = true,
}) => {
  const programsDropdownData = { defaultValue: {}, data: [] };
  const degreeDropdownData = { defaultValue: {}, data: [] };
  const departmentsDropdownData = { defaultValue: {}, data: [] };

  let defaultDegree = selectedDegree ? selectedDegree : false; // Flag to track if default value has been set

  degrees?.data?.forEach((item, index) => {
    let newItem = { value: item.title, label: item.title };
    if (!defaultDegree) {
      degreeDropdownData.defaultValue = newItem;
      defaultDegree = true;
    } else if (selectedDegree) {
      degreeDropdownData.defaultValue = {
        value: selectedDegree,
        label: selectedDegree,
      };
    }
    degreeDropdownData.data.push(newItem);
  });

  let defaultDepartment = false; // Flag to track if default value has been set

  departments?.data?.forEach((item, index) => {
    if (academicPage && !item?.show_on_academics) {
      return;
    }
    let newItem = {
      value: item.title,
      label: item.title,
      program_category: item.program_category,
    };
    let filteringItem = selectedDegree
      ? selectedDegree
      : degreeDropdownData.defaultValue.value;
    // Set the default value only once if the condition is met
    if (
      !defaultDepartment &&
      filteringItem == newItem.program_category?.title
    ) {
      departmentsDropdownData.defaultValue = newItem;
      defaultDepartment = true; // Mark default as set
    } else if (!fromDegree && selectedDepartment) {
      departmentsDropdownData.defaultValue = {
        value: selectedDepartment,
        label: selectedDepartment,
      };
    }

    // Push the item to data if the condition is satisfied
    if (newItem.program_category?.title === filteringItem) {
      departmentsDropdownData.data.push(newItem);
    }
  });

  let defaultProgram = selectedProgram ? selectedProgram : false; // Flag to track if default value has been set

  programs?.data?.forEach((item, index) => {
    let newItem = {
      value: item.title,
      label: item.title,
      department_category: item?.department_category,
    };

    let filteringItem = selectedDepartment
      ? fromDegree
        ? departmentsDropdownData.defaultValue.value
        : selectedDepartment
      : departmentsDropdownData.defaultValue.value;

    if (
      !defaultProgram &&
      filteringItem == newItem.department_category?.title
    ) {
      programsDropdownData.defaultValue = newItem;
      defaultProgram == true;
    }
    if (newItem.department_category?.title === filteringItem) {
      programsDropdownData.data.push(newItem);
    }
  });

  return { programsDropdownData, degreeDropdownData, departmentsDropdownData };
};

export default getFormattedDropdownData;
