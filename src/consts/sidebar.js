import {
  AiOutlineHome,
  AiFillHome,
  RiSearchLine,
  RiSearchFill,
  IoLibraryOutline,
  IoLibrarySharp,
  BsPlusSquare,
  BsPlusSquareFill,
  BsBookmarkHeart,
  BsBookmarkHeartFill,
} from "../icon";

export const NAV_SIDEBAR_TOP = [
  {
    title: "Trang chủ",
    icon: <AiOutlineHome />,
    iconActive: <AiFillHome />,
    link: "/",
    requiresLogin: false,
  },
  {
    title: "Tìm kiếm",
    icon: <RiSearchLine />,
    iconActive: <RiSearchFill />,
    link: "/search",
    requiresLogin: false,
  },
  {
    title: "Thư viện",
    icon: <IoLibraryOutline />,
    iconActive: <IoLibrarySharp />,
    link: "/library",
    requiresLogin: true,
  },
];

export const NAV_SIDEBAR_BOTTOM = [
  {
    title: "Tạo playlist",
    icon: <BsPlusSquare />,
    iconActive: <BsPlusSquareFill />,
    link: "/playlist",
    requiresLogin: true,
  },
  {
    title: "Bài hát đã thích",
    icon: <BsBookmarkHeart />,
    iconActive: <BsBookmarkHeartFill />,
    link: "/likesong",
    requiresLogin: true,
  },
];
