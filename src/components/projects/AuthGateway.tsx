import { CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AuthGatewaySlides({ project }: { project: any }) {
  return (
    <>
      <CarouselItem className="flex flex-col p-8 md:p-12">
        <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="font-mono">Go</Badge>
          <Badge variant="secondary" className="font-mono">Envoy</Badge>
          <Badge variant="secondary" className="font-mono">Redis</Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed flex-1">
          {project.description} A high-throughput API gateway written in Go that handles authentication, rate-limiting, and routing for all microservices in the cluster, leveraging Redis for distributed token caching.
        </p>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-primary mb-4">System Visual</h3>
        <div className="flex-1 w-full bg-muted/30 rounded-xl flex items-center justify-center border border-border overflow-hidden relative shadow-inner">
          <span className="font-mono text-muted-foreground text-sm z-10">[ Gateway Architecture Diagram ]</span>
        </div>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-primary mb-6">Performance Metrics</h3>
        <div className="flex flex-col gap-4 flex-1 justify-center max-w-md w-full">
          <div className="flex justify-between items-center border-b border-border pb-4">
            <span className="font-mono text-muted-foreground text-sm">Processing Overhead</span>
            <span className="font-mono text-lg font-semibold text-primary">&lt;5ms</span>
          </div>
          <div className="flex justify-between items-center border-b border-border pb-4">
            <span className="font-mono text-muted-foreground text-sm">RPS</span>
            <span className="font-mono text-lg font-semibold text-primary">25,000 req/s</span>
          </div>
        </div>
      </CarouselItem>

      <CarouselItem className="p-8 md:p-12 flex flex-col">
         <h3 className="text-xl font-heading font-bold text-primary mb-8">Resources</h3>
         <div className="flex flex-col gap-4 flex-1 justify-center max-w-xs mx-auto w-full">
           <Button variant="default" className="w-full font-mono font-bold tracking-wide">Read Post-mortem</Button>
           <Button variant="secondary" className="w-full font-mono font-bold tracking-wide border border-border">GitHub Repo</Button>
         </div>
      </CarouselItem>
    </>
  );
}
