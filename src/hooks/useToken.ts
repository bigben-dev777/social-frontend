import { useSelector } from "@/store/index";

export default function useToken() {
    const token = useSelector(store => store.auth.token);

    return token
}