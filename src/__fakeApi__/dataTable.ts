import { format } from "date-fns";
import uniqueId from "utils/generateId";
import Mock from "./mock";

const tableData1 = [
  {
    id: uniqueId(),
    avatar: "/static/avatar/001-man.svg",
    name: "Zachary Gomez",
    username: "zachary-gomez",
    email: "zachary-gomez@gmail.com",
    role: "Editor",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/002-girl.svg",
    name: "Amanda Montgomery",
    username: "amanda-montgomery",
    email: "montgomery@ya.com",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/003-boy.svg",
    name: "Lester Holland",
    username: "lester-holland",
    email: "lester75@gmail.com",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/004-woman.svg",
    name: "Max Allison",
    username: "max-allison",
    email: "max-allison@pochta.io",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/005-man-1.svg",
    name: "Richard Gregory",
    username: "r.gregory",
    email: "gregory@gmail.com",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/006-woman-1.svg",
    name: "Clifford Caldwell",
    username: "clifford-caldwell",
    email: "clifford-c@gmail.com",
    role: "Author",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/007-boy-1.svg",
    name: "Lester Holland",
    username: "zlester-holland",
    email: "lester75@gmail.com",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/008-clown.svg",
    name: "Richard Gregory",
    username: "r.gregory",
    email: "gregory@gmail.com",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/009-firefighter.svg",
    name: "Max Allison",
    username: "max-allison",
    email: "max-allison@pochta.io",
    role: "Subscriber",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/010-girl-1.svg",
    name: "Zachary Gomez",
    username: "zachary-gomez",
    email: "zachary-gomez@gmail.com",
    role: "Editor",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/011-man-2.svg",
    name: "Zachary Gomez",
    username: "zachary-gomez",
    email: "zachary-gomez@gmail.com",
    role: "Editor",
  },
  {
    id: uniqueId(),
    avatar: "/static/avatar/012-woman-2.svg",
    name: "Zachary Gomez",
    username: "zachary-gomez",
    email: "zachary-gomez@gmail.com",
    role: "Editor",
  },
];

Mock.onGet("/api/tableData1/all").reply((config) => {
  return [200, tableData1];
});

Mock.onPost("/api/tableData1/new").reply((config) => {
  const { name, username, email, role } = JSON.parse(config.data);

  const newData = {
    role,
    name,
    email,
    username,
    id: uniqueId(),
    avatar: "/static/avatar/012-woman-2.svg",
  };

  tableData1.push(newData);

  return [200, tableData1];
});

Mock.onPost("/api/tableData1/delete").reply((config) => {
  const { ids } = JSON.parse(config.data);

  const filterTable = tableData1.filter(
    (data, index) => data.id !== ids[index]
  );

  return [200, filterTable];
});

// ============================================================

const dateOfBirth = format(new Date(2021, 11, 2), "MMM dd, yyyy");

const tableData2 = [
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/001-man.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Callins",
    position: "Editor",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/002-girl.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/003-boy.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/004-woman.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/005-man-1.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/001-man.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Callins",
    position: "Editor",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/002-girl.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/003-boy.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/004-woman.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/005-man-1.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/001-man.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Callins",
    position: "Editor",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/002-girl.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Designer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/003-boy.svg",
    dateOfBirth,
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/004-woman.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
  {
    id: uniqueId(),
    name: "Lily Collins",
    position: "Developer",
    team: 15,
    experience: "3 years",
    phone: "+00578115245",
    avatar: "/static/avatar/005-man-1.svg",
    dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
    email: "Uilib@gmail.com",
    address: "Corner View, Sylhet",
    status: "Full Time",
  },
];

Mock.onGet("/api/tableData2/all").reply((config) => {
  return [200, tableData2];
});

Mock.onPost("/api/tableData2/new").reply((config) => {
  const {
    name,
    username,
    email,
    position,
    team,
    experience,
    dateOfBirth,
    address,
    status,
  } = JSON.parse(config.data);

  const newObj: any = {
    name,
    email,
    username,
    position,
    team,
    experience,
    address,
    status,
    id: uniqueId(),
    avatar: "/static/avatar/012-woman-2.svg",
    dateOfBirth: format(new Date(dateOfBirth), "MMM dd, yyyy"),
  };

  tableData2.push(newObj);

  return [200, tableData2];
});

Mock.onPost("/api/tableData2/delete").reply((config) => {
  const { ids } = JSON.parse(config.data);

  const filterTable = tableData2.filter(
    (data, index) => data.id !== ids[index]
  );

  return [200, filterTable];
});
