"use client"

import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {CalendarIcon, SearchIcon} from "lucide-react";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Calendar} from "@/components/ui/calendar";
import React, {useState} from "react";

const SearchPanel = () => {
    const [date, setDate] = useState<Date>()

    return (
        <div className="relative w-full h-[85vh] group">
            <Image
                src="https://showbird.com/images/homepageslider/showbird-home-def-40c-noborder.jpg"
                fill
                alt="Cover"
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Card>
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        <div className="block md:flex gap-x-2 items-start justify-start text-start">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="type">Я ищу</Label>
                                <Input type="type" id="type" placeholder="Музыканта"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 pt-4 md:pt-0">
                                <Label htmlFor="city">для мероприятия в</Label>
                                <Input className="outline-none focus:utline-none" type="city" id="city"
                                       placeholder="Городе"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 pt-4 md:pt-0">
                                <Label htmlFor="email">на</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[280px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4"/>
                                            {date ? format(date, "PPP", {locale: ru}) :
                                                <span>Дату</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                            locale={ru}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Button className="mt-5">
                                    <SearchIcon className="w-4 h-4 mr-2"/>
                                    Поиск
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        Показать всех
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default SearchPanel;
