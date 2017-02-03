# k-nearest-neighbour

Machine Learning in JS: k-nearest-neighbor

I think the best way to teach the kNN algorithm is to simply define what the phrase "k-nearest-neighbor" actually means.

We're going to plot the data points for flats and apartments on a graph in two dimensions, using, e.g. number of rooms, as the x-axis and, e.g. the area, as the y-axis.

When we inevitably run into a new, unlabeled data point ("mystery point"), we'll put that on the graph too. Then we'll pick a number (called "k") and just find the "k" closest points on the graph to our mystery point. If the majority of the points close to the new point are "flats", then we'll guess that our mystery point is a flat.

That's what k-nearest-neighbor means. "If the 3 (or 5 or 10, or 'k') nearest neighbors to the mystery point are two apartments and one house, then the mystery point is an apartment."
