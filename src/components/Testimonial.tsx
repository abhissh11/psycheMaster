import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export default function Testimonial() {
  const acknowledgements = [
    {
      id: 1,
      name: "Alice Johnson",
      feedback:
        "The service was exceptional! The team went above and beyond to ensure my needs were met. Highly recommend to everyone!",
    },
    {
      id: 2,
      name: "Michael Lee",
      feedback:
        "A seamless experience from start to finish. Professional, efficient, and very attentive to customer concerns. Absolutely fantastic!",
    },
    {
      id: 3,
      name: "Sophia Ramirez",
      feedback:
        "I am so impressed with the quality of support. They truly care about their customers and it shows in their work. An outstanding experience! The attention to detail and customer care were top-notch. Truly exceeded my expectations.",
    },
    {
      id: 4,
      name: "James Carter",
      feedback:
        "Quick and reliable service. The team’s dedication and expertise made all the difference. I will definitely be returning!",
    },
    {
      id: 5,
      name: "Emily Davis",
      feedback:
        "An outstanding experience! The attention to detail and customer care were top-notch. Truly exceeded my expectations.",
    },
  ];

  return (
    <div className="min-h-[50vh] max-w-[100vw] bg-indigo-100 px-4 md:px-10 lg:px-10 py-20 overflow-hidden">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl text-indigo-600 flex gap-4 items-center font-normal font-mono text-center">
          Our Testimonials
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-normal font-serif text-yellow-900 tracking-wide leading-snug text-center">
          What people says about us!
        </h1>
      </div>
      <div className="w-full flex items-center justify-center my-20 p-2">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[80%]"
        >
          <CarouselContent className="">
            {acknowledgements.map((ack) => (
              <CarouselItem
                key={ack.id}
                className="md:basis-1/2 lg:basis-1/3 w-full"
              >
                <div className="p-1">
                  <Card className="border-yellow-950 gray-bg shadow-lg">
                    <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-4">
                      <p className="text-base text-gray-200 font-serif font-normal tracking-wide">
                        "{ack.feedback}"
                      </p>
                      <h1 className="text-white text-sm font-serif font-semibold">
                        - {ack.name}
                      </h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
