"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Badge } from "./ui/badge";

const totalQuestions = 2;

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleOptionSelect = (id: number) => {
    setSelectedOption(id);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-3xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Question {currentQuestion + 1}
          </h1>

          {currentQuestion === 0 ? (
            <div className="mb-6">
              {/* <h2 className="text-xl font-medium mb-4">Select an option:</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 border rounded-md cursor-pointer transition-colors ${
                      selectedOption === item.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleOptionSelect(item.id)}
                  >
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div> */}
              <div className="container mx-auto p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                  {/* Classification Card */}
                  <Card
                    className="overflow-hidden cursor-pointer"
                    onClick={handleNext}
                    // disabled={currentQuestion === totalQuestions - 1}
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video relative mb-6">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="3D objects showing classification"
                          className="rounded-lg object-cover"
                          width={600}
                          height={400}
                        />
                      </div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl font-bold mb-2">
                          Classification
                        </CardTitle>
                      </CardHeader>
                      <p className="text-muted-foreground mb-6">
                        Assign labels to the entire image.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-2">
                            Classification Type:
                          </h3>
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 hover:bg-green-100"
                            >
                              Single-Label
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 hover:bg-green-100"
                            >
                              Multi-Label
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-2">
                            Best for:
                          </h3>
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              Filtering
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              Content Moderation
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Object Detection Card */}
                  <Card
                    className="overflow-hidden cursor-pointer"
                    onClick={handleNext}
                  >
                    <CardContent className="p-6">
                      <div className="aspect-video relative mb-6">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="3D objects showing object detection"
                          className="rounded-lg object-cover"
                          width={600}
                          height={400}
                        />
                      </div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-2xl font-bold mb-2">
                          Object Detection
                        </CardTitle>
                      </CardHeader>
                      <p className="text-muted-foreground mb-6">
                        Identify and locate objects within an image.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-2">
                            Classification Type:
                          </h3>
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 hover:bg-green-100"
                            >
                              Bounding Boxes
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 hover:bg-green-100"
                            >
                              Segmentation
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm text-muted-foreground mb-2">
                            Best for:
                          </h3>
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              Inventory Management
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              Security Systems
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <h2 className="text-xl font-medium mb-4">
                Please fill out the form:
              </h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preferred contact method</Label>
                  <RadioGroup defaultValue="email">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentQuestion === totalQuestions - 1}
            >
              {currentQuestion === totalQuestions - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
