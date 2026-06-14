import { CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeuristikSlides({ project }: { project: any }) {
  return (
    <>
      <CarouselItem className="flex flex-col p-8 md:p-12">
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="font-mono">Python</Badge>
          <Badge variant="secondary" className="font-mono">PyTorch</Badge>
          <Badge variant="secondary" className="font-mono">Kafka</Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed flex-1">
          {project.description} This system implements an AI-driven threat detection pipeline that analyzes network traffic in real-time. It uses a custom deep learning model optimized for low-latency inference on streaming data.
        </p>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-primary mb-4">System Visual</h3>
        <div className="flex-1 w-full bg-muted/30 rounded-xl flex items-center justify-center border border-border overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
          <span className="font-mono text-muted-foreground text-sm z-10">[ Threat Map Dashboard Placeholder ]</span>
        </div>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-primary mb-6">Performance Metrics</h3>
        <div className="flex flex-col gap-4 flex-1 justify-center max-w-md w-full">
          <div className="flex justify-between items-center border-b border-border pb-4">
            <span className="font-mono text-muted-foreground text-sm">Inference Latency</span>
            <span className="font-mono text-lg font-semibold text-primary">~18ms</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-4">
            <span className="font-mono text-muted-foreground text-sm">Throughput</span>
            <span className="font-mono text-lg font-semibold text-primary">12,000 events/s</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-4">
            <span className="font-mono text-muted-foreground text-sm">Accuracy</span>
            <span className="font-mono text-lg font-semibold text-primary">99.2%</span>
          </div>
        </div>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
         <h3 className="text-xl font-heading font-bold text-primary mb-8">Resources</h3>
         <div className="flex flex-col gap-4 flex-1 justify-center max-w-xs mx-auto w-full">
           <Button variant="default" className="w-full font-mono font-bold tracking-wide">Visit Live Web</Button>
           <Button variant="secondary" className="w-full font-mono font-bold tracking-wide border border-border">GitHub Repo</Button>
           <Button variant="outline" className="w-full font-mono font-bold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">Read Architecture Docs</Button>
         </div>
      </CarouselItem>
    </>
  );
}
