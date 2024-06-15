import {
  IconCategory,
  IconComment,
  IconDashBoard,
  IconOrder,
  IconUser
} from "@/components/icons";
import { IconCoffee } from "@/components/icons/IconCoffee";

export const menuItems: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  {
    url: "/",
    title: "Tổng quan",
    icon: <IconDashBoard className="size-5" />,
  },
  {
    url: "/manage/category",
    title: "Quản lý danh mục",
    icon: <IconCategory className="size-5" />,
  },
  {
    url: "/manage/product",
    title: "Quản lý sản phẩm",
    icon: <IconCoffee className="size-5" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý khách hàng",
    icon: <IconUser className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];
