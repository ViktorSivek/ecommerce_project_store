"use client"

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    const openAdminPanel = () => {
      window.open('https://ecommerce-project-admin-one.vercel.app/', '_blank');
    };

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
          <Button onClick={openAdminPanel} className="flex items-center rounded-full bg-blue-400 px-4 py-2">
            <span className="text-sm font-medium text-white">
              Admin
            </span>
          </Button>
          <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag
              size={20}
              color="white"
            />
            <span className="ml-2 text-sm font-medium text-white">
              {cart.items.length}
            </span>
          </Button>
        </div>
    );
}
 
export default NavbarActions;