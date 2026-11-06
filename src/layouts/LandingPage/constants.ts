/** Menu con của tab "Thang máy" dùng chung cho Header (desktop) và CollapsedSideBar (mobile). */
export interface ElevatorMenuItem {
    label: string;
    path: string;
}

export const ELEVATOR_SUBMENU: ElevatorMenuItem[] = [
    { label: "Thang máy gia đình/biệt thự", path: "/thang-may/thang-may-gia-dinh" },
    { label: "Thang máy tải hàng/chuyên dụng", path: "/thang-may/thang-may-tai-hang" },
    { label: "Thang máy tải khách", path: "/thang-may/thang-may-tai-khach" },
    { label: "Thang máy quan sát", path: "/thang-may/thang-may-quan-sat" },
    { label: "Thang máy sàn nâng", path: "/thang-may/thang-may-san-nang" },
];
