
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const MediaKitPage = () => {
  useEffect(() => {
    document.title = "Media Kit - Rollback";
  }, []);

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadLogo = (format: string) => {
    // Create a canvas element
    const canvas = document.createElement("canvas");
    const size = 1000; // Higher resolution for better quality
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      // Set background to transparent
      ctx.clearRect(0, 0, size, size);

      const center = size / 2;
      const radius = size * 0.48; // 48% of size for the main circle

      // Background circle
      ctx.beginPath();
      ctx.arc(center, center, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#FAEBD1";
      ctx.fill();
      ctx.strokeStyle = "#3C2415";
      ctx.lineWidth = size * 0.04; // 4% of size for stroke width
      ctx.stroke();

      // Calculate petal coordinates
      const petalSize = radius * 0.58; // Size relative to main circle
      const innerRadius = size * 0.1; // 10% of size for inner circle

      // Petal 1 (top right)
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center + petalSize * 0.7, center - petalSize * 0.7); // Corner point
      ctx.arc(center, center - petalSize, petalSize, 0, Math.PI);
      ctx.closePath();
      ctx.fillStyle = "#E9A344";
      ctx.fill();

      // Petal 2 (top left)
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center - petalSize * 0.7, center - petalSize * 0.7); // Corner point
      ctx.arc(center - petalSize, center, petalSize, -Math.PI / 2, Math.PI / 2);
      ctx.closePath();
      ctx.fillStyle = "#F5C678";
      ctx.fill();

      // Petal 3 (bottom left)
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center - petalSize * 0.7, center + petalSize * 0.7); // Corner point
      ctx.arc(center, center + petalSize, petalSize, Math.PI, 0);
      ctx.closePath();
      ctx.fillStyle = "#E9A344";
      ctx.fill();

      // Petal 4 (bottom right)
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(center + petalSize * 0.7, center + petalSize * 0.7); // Corner point
      ctx.arc(center + petalSize, center, petalSize, Math.PI / 2, -Math.PI / 2);
      ctx.closePath();
      ctx.fillStyle = "#F5C678";
      ctx.fill();

      // Center circle
      ctx.beginPath();
      ctx.arc(center, center, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#8B5E3C";
      ctx.fill();

      // Convert to data URL and download
      const dataUrl = canvas.toDataURL(
        `image/${format === "svg" ? "png" : format}`
      );
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `rollback-logo.${format}`;
      link.click();
    }
  };

  const svgRef = useRef<SVGSVGElement>(null);

  const downloadImage = (format: "png" | "jpeg") => {
    const svgElement = svgRef.current;
    if (!svgElement) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = svgElement.width.baseVal.value;
      canvas.height = svgElement.height.baseVal.value;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (format === "jpeg") {
        ctx.fillStyle = "#ffffff"; // white background for JPEG
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.download = `image.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();

      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-20"
      >
        <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 sm:mb-6 text-center">
              Rollback Media Kit
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center mb-8 sm:mb-12">
              Resources and guidelines for using Rollback brand assets.
            </p>

            {/* Logo Section */}
            <section className="mb-10 sm:mb-16">
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 flex-shrink-0 mx-auto md:mx-0">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="#FAEBD1"
                      stroke="#3C2415"
                      strokeWidth="4"
                    />

                    {/* Petals */}
                    <path
                      d="M50 50 L70 30 A28 28 0 0 0 30 30 Z"
                      fill="#E9A344"
                    />
                    <path
                      d="M50 50 L30 30 A28 28 0 0 0 30 70 Z"
                      fill="#F5C678"
                    />
                    <path
                      d="M50 50 L30 70 A28 28 0 0 0 70 70 Z"
                      fill="#E9A344"
                    />
                    <path
                      d="M50 50 L70 70 A28 28 0 0 0 70 30 Z"
                      fill="#F5C678"
                    />

                    {/* Center circle */}
                    <circle cx="50" cy="50" r="10" fill="#8B5E3C" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left">Rollback Logo</h2>
                  <p className="text-sm sm:text-base text-muted-foreground text-center md:text-left">
                    Our logo represents security and protection for
                    cryptocurrency assets. The flower-like design symbolizes
                    growth and the cycle of renewal.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    <Button
                      onClick={() => downloadImage("png")}
                      className="bg-rollback-primary hover:bg-rollback-primary/90 text-xs sm:text-sm"
                    >
                      <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      PNG
                    </Button>
                    <Button
                      onClick={() => downloadImage("jpeg")}
                      className="bg-rollback-primary hover:bg-rollback-primary/90 text-xs sm:text-sm"
                    >
                      <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      JPEG
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Colors Section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Brand Colors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  {
                    name: "Primary",
                    hex: "#E9A344",
                    tailwind: "rollback-primary",
                  },
                  {
                    name: "Secondary",
                    hex: "#F5C678",
                    tailwind: "rollback-secondary",
                  },
                  { name: "Cream", hex: "#FAEBD1", tailwind: "rollback-cream" },
                  { name: "Light", hex: "#F9F3E5", tailwind: "rollback-light" },
                  { name: "Brown", hex: "#8B5E3C", tailwind: "rollback-brown" },
                  { name: "Dark", hex: "#3C2415", tailwind: "rollback-dark" },
                ].map((color) => (
                  <Card key={color.hex} className="overflow-hidden">
                    <div
                      className="h-16 sm:h-24"
                      style={{ backgroundColor: color.hex }}
                    />
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-medium">{color.name}</h3>
                      <div className="flex justify-between mt-1 sm:mt-2">
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {color.hex}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 sm:h-6 p-0 sm:p-1"
                          onClick={() => handleCopy(color.hex, color.hex)}
                        >
                          {copied === color.hex ? (
                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {color.tailwind}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 sm:h-6 p-0 sm:p-1"
                          onClick={() =>
                            handleCopy(color.tailwind, color.tailwind)
                          }
                        >
                          {copied === color.tailwind ? (
                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Brand Guidelines */}
            {/* <section className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Brand Guidelines</h2>
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium mb-2">Logo Usage</h3>
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-2">
                        <li>Maintain the logo's proportions when resizing</li>
                        <li>
                          Ensure adequate spacing around the logo (minimum clear
                          space equal to 25% of the logo's width)
                        </li>
                        <li>Do not rotate or distort the logo</li>
                        <li>Do not change the logo's colors</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-medium mb-2">Brand Voice</h3>
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-muted-foreground space-y-1 sm:space-y-2">
                        <li>Trustworthy yet approachable</li>
                        <li>Technical but accessible</li>
                        <li>Informative and educational</li>
                        <li>Straightforward and honest</li>
                        <li>Reassuring and confident</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-medium mb-2">Messaging</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="p-3 sm:p-4 bg-muted rounded-md">
                          <p className="font-medium text-xs sm:text-sm">Tagline</p>
                          <p className="italic text-xs sm:text-sm">
                            "Never Lose Access to Your Crypto Again"
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-1 sm:mt-2 text-xs"
                            onClick={() =>
                              handleCopy(
                                "Never Lose Access to Your Crypto Again",
                                "tagline"
                              )
                            }
                          >
                            {copied === "tagline" ? (
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                            )}
                          </Button>
                        </div>

                        <div className="p-3 sm:p-4 bg-muted rounded-md">
                          <p className="font-medium text-xs sm:text-sm">
                            Company Description (short)
                          </p>
                          <p className="italic text-xs sm:text-sm">
                            "Rollback provides automatic safety nets for
                            cryptocurrency assets, ensuring they remain
                            accessible even during unexpected events."
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-1 sm:mt-2 text-xs"
                            onClick={() =>
                              handleCopy(
                                "Rollback provides automatic safety nets for cryptocurrency assets, ensuring they remain accessible even during unexpected events.",
                                "desc-short"
                              )
                            }
                          >
                            {copied === "desc-short" ? (
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section> */}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default MediaKitPage;
